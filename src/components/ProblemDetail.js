import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from './CodeEditor';
import { challenges } from '../constants/challenges';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3500';

function ProblemDetail() {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [code, setCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const [problemStatus, setProblemStatus] = useState('not_attempted');
  const [lastResult, setLastResult] = useState(null);
  const [statusError, setStatusError] = useState(null);

  useEffect(() => {
    const foundChallenge = challenges.find(c => c.id === parseInt(id));
    if (foundChallenge) {
      setChallenge(foundChallenge);
      setCode(foundChallenge.starterCode || '');
      const savedStatus = localStorage.getItem(`problem_${id}_status`);
      if (savedStatus) {
        setProblemStatus(savedStatus);
      }
    }
  }, [id]);

  const runTests = async () => {
    setIsRunning(true);
    setLastResult(null);
    setStatusError(null);
    const results = [];

    try {
      for (const testCase of challenge.testCases) {
        const result = {
          testCase: testCase.id,
          input: testCase.input,
          expected: testCase.output,
          actual: null,
          passed: false,
          error: null
        };

        try {
          const wrappedCode = `
            ${code}
            return solve(input);
          `;
          const userFunction = new Function('input', wrappedCode);
          const actualOutput = userFunction(testCase.input);
          result.actual = actualOutput;
          result.passed = JSON.stringify(actualOutput) === JSON.stringify(testCase.output);
        } catch (error) {
          result.error = error.message;
        }

        results.push(result);
      }

      setTestResults(results);

      const allPassed = results.every(r => r.passed);
      
      // Update problem status in backend
      try {
        const userId = localStorage.getItem('userId');
        await axios.post(`${API_BASE_URL}/api/update-problem-status`, {
          problemId: challenge.id,
          status: allPassed ? 'solved' : 'attempted',
          difficulty: challenge.difficulty
        }, {
          headers: { 'user-id': userId }
        });
      } catch (error) {
        setStatusError('Failed to update problem status. Please try again.');
        console.error('Error updating problem status:', error);
      }

      setLastResult({
        type: 'run',
        success: allPassed,
        message: allPassed ? 'All test cases passed!' : 'Some test cases failed.'
      });

    } catch (error) {
      console.error('Error running tests:', error);
      setLastResult({
        type: 'run',
        success: false,
        message: 'Error running tests: ' + error.message
      });
    } finally {
      setIsRunning(false);
    }
  };

  const submitSolution = async () => {
    setIsRunning(true);
    setLastResult(null);
    setStatusError(null);

    try {
      await runTests();
      if (testResults.every(r => r.passed)) {
        // Update problem status to solved in backend
        try {
          const userId = localStorage.getItem('userId');
          await axios.post(`${API_BASE_URL}/api/update-problem-status`, {
            problemId: challenge.id,
            status: 'solved',
            difficulty: challenge.difficulty
          }, {
            headers: { 'user-id': userId }
          });
        } catch (error) {
          setStatusError('Failed to update problem status. Please try again.');
          console.error('Error updating problem status:', error);
        }

        setLastResult({
          type: 'submit',
          success: true,
          message: 'Solution submitted successfully!'
        });
      } else {
        setLastResult({
          type: 'submit',
          success: false,
          message: 'Solution failed some test cases. Please fix the issues and try again.'
        });
      }
    } catch (error) {
      setLastResult({
        type: 'submit',
        success: false,
        message: 'Error submitting solution: ' + error.message
      });
    } finally {
      setIsRunning(false);
    }
  };

  if (!challenge) {
    return <div style={{ color: 'red', padding: '2rem' }}>Problem not found. Please return to the problem list.</div>;
  }

  return (
    <div className="problem-detail-container">
      <div className="problem-sidebar">
        <div className="problem-header">
          <h2>{challenge.title}</h2>
          <div className="problem-meta">
            <span className={`difficulty-badge ${
              challenge.difficulty === 'Easy' ? 'difficulty-easy' :
              challenge.difficulty === 'Medium' ? 'difficulty-medium' :
              challenge.difficulty === 'Hard' ? 'difficulty-hard' : ''
            }`}>
              {challenge.difficulty || 'Unknown'}
            </span>
          </div>
        </div>

        <div className="problem-description">
          <h3>Description</h3>
          <p>{challenge.description}</p>
          {challenge.inputLimits && (
            <div className="input-limits">
              <h4>Input Limits</h4>
              <ul>
                <li><strong>Size:</strong> {challenge.inputLimits.size}</li>
                <li><strong>Number of Inputs:</strong> {challenge.inputLimits.numberOfInputs}</li>
                <li><strong>Note:</strong> {challenge.inputLimits.note}</li>
              </ul>
            </div>
          )}

          <h3>Samples</h3>
          {Array.isArray(challenge.examples) && challenge.examples.length > 0 ? (
            challenge.examples.map((example, index) => (
              <div key={index} className="example-section">
                <h4>Sample {index + 1}</h4>
                <p style={{marginBottom: 0, color: '#94a3b8'}}>Input:</p>
                <pre style={{background: '#1e293b', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto'}}>
                  {example.input}
                </pre>
                <p style={{marginBottom: 0, color: '#94a3b8'}}>Output:</p>
                <pre style={{background: '#1e293b', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto'}}>
                  {example.output}
                </pre>
                {example.explanation && (
                  <p className="explanation">{example.explanation}</p>
                )}
              </div>
            ))
          ) : (
            <p style={{ color: '#f87171', fontStyle: 'italic', marginTop: '1rem' }}>
              No samples available for this problem.
            </p>
          )}
        </div>
      </div>

      <div className="editor-sidebar">
        <div className="editor-container">
          <div className="editor-header">
            <div className="editor-controls">
              <select className="language-select" disabled>
                <option value="javascript">JavaScript</option>
              </select>
            </div>
          </div>

          <CodeEditor
            code={code}
            onChange={setCode}
            language="javascript"
          />

          <div className="editor-actions">
            <div className="editor-buttons">
              <button
                className="editor-button run"
                onClick={runTests}
                disabled={isRunning}
              >
                {isRunning ? 'Running...' : 'Run Tests'}
              </button>
              <button
                className="editor-button submit"
                onClick={submitSolution}
                disabled={isRunning}
              >
                Submit Solution
              </button>
            </div>
            {lastResult && (
              <div className={`result-message ${lastResult.success ? 'success' : 'error'}`}>
                {lastResult.message}
              </div>
            )}
            {statusError && (
              <div className="error-message" style={{marginTop: '0.5rem'}}>{statusError}</div>
            )}
          </div>

          {testResults.length > 0 && (
            <div className="test-cases">
              <h3 style={{marginBottom: '1rem'}}>Test Case Results</h3>
              {testResults.map((result, idx) => (
                <div key={idx} className="test-case">
                  <div className="test-case-header">
                    <span>Test Case {idx + 1}</span>
                    <span className={`test-case-status ${result.passed ? 'passed' : 'failed'}`}>{result.passed ? 'Passed' : 'Failed'}</span>
                  </div>
                  <div className="test-case-content">
                    <div><strong>Input:</strong> <pre style={{display: 'inline'}}>{JSON.stringify(result.input)}</pre></div>
                    <div><strong>Expected:</strong> <pre style={{display: 'inline'}}>{JSON.stringify(result.expected)}</pre></div>
                    <div><strong>Actual:</strong> <pre style={{display: 'inline'}}>{JSON.stringify(result.actual)}</pre></div>
                    {result.error && <div className="error"><strong>Error:</strong> {result.error}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProblemDetail;
