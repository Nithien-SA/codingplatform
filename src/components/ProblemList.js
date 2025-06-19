import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { challenges } from '../constants/challenges';
import axios from 'axios';

const API_BASE_URL = 'https://coderb-prv4.onrender.com';

const ProblemList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    solved: 0,
    attempted: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    completionRate: 0
  });
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [attemptedProblems, setAttemptedProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user progress from backend
  useEffect(() => {
    const fetchUserProgress = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/user-progress`);
        setSolvedProblems(response.data.solvedProblemIds);
        setAttemptedProblems(response.data.attemptedProblemIds);
        const totalProblems = challenges.length;
        const solvedCount = response.data.solvedProblemIds.length;
        const attemptedCount = response.data.attemptedProblemIds.length;
        const completionRate = totalProblems > 0 ? Math.round((solvedCount / totalProblems) * 100) : 0;
        
        setStats({
          total: totalProblems,
          solved: solvedCount,
          attempted: attemptedCount,
          easy: response.data.easySolved,
          medium: response.data.mediumSolved,
          hard: response.data.hardSolved,
          completionRate: completionRate
        });
      } catch (error) {
        setError('Failed to fetch user progress. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchUserProgress();
  }, [challenges.length]);

  // Initialize filteredChallenges
  useEffect(() => {
    setFilteredChallenges([...challenges]);
  }, []);

  // Filter and sort challenges
  useEffect(() => {
    let filtered = [...challenges];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(challenge =>
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply difficulty filter
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(challenge => 
        challenge.difficulty.toLowerCase() === difficultyFilter.toLowerCase()
      );
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(challenge => {
        const status = getProblemStatus(challenge.id);
        return status === statusFilter;
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'id':
          comparison = a.id - b.id;
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'difficulty':
          comparison = a.difficulty.localeCompare(b.difficulty);
          break;
        case 'status':
          comparison = getProblemStatus(a.id).localeCompare(getProblemStatus(b.id));
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    setFilteredChallenges(filtered);
  }, [searchTerm, difficultyFilter, statusFilter, sortBy, sortOrder, solvedProblems, attemptedProblems]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'solved':
        return 'text-green-500';
      case 'attempted':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'difficulty-easy';
      case 'Medium':
        return 'difficulty-medium';
      case 'Hard':
        return 'difficulty-hard';
      default:
        return '';
    }
  };

  const getProblemStatus = (problemId) => {
    if (solvedProblems.includes(problemId)) return 'solved';
    if (attemptedProblems.includes(problemId)) return 'attempted';
    return 'unattempted';
  };

  // Calculate difficulty-specific stats
  const easyProblems = challenges.filter(c => c.difficulty === 'Easy');
  const mediumProblems = challenges.filter(c => c.difficulty === 'Medium');
  const hardProblems = challenges.filter(c => c.difficulty === 'Hard');

  // Use backend stats for solved/total and percentage
  const easySolved = stats.easy;
  const mediumSolved = stats.medium;
  const hardSolved = stats.hard;
  const easyTotal = easyProblems.length;
  const mediumTotal = mediumProblems.length;
  const hardTotal = hardProblems.length;
  const easyPercentage = easyTotal > 0 ? (easySolved / easyTotal) * 100 : 0;
  const mediumPercentage = mediumTotal > 0 ? (mediumSolved / mediumTotal) * 100 : 0;
  const hardPercentage = hardTotal > 0 ? (hardSolved / hardTotal) * 100 : 0;

  return (
    <div className="problems-container">
      {loading && <div className="loading-spinner">Loading problems...</div>}
      {error && <div className="error-message">{error}</div>}
      <div className="profile-section">
        <div className="profile-bottles-area">
          <div className="bottles-container">
            <div className="bottle-container">
              <div className="bottle-label easy">Easy</div>
              <div className="bottle">
                <div className="water easy" style={{ height: `${easyPercentage}%` }} />
                <div className="progress-text">{Math.round(easyPercentage)}%</div>
              </div>
              <div className="progress-stats">
                <div className="progress-stat">
                  <span className="progress-stat-value">{easySolved}</span>
                  <span className="progress-stat-label">Solved</span>
                </div>
                <div className="progress-stat">
                  <span className="progress-stat-value">{easyTotal}</span>
                  <span className="progress-stat-label">Total</span>
                </div>
              </div>
            </div>
            <div className="bottle-container">
              <div className="bottle-label medium">Medium</div>
              <div className="bottle">
                <div className="water medium" style={{ height: `${mediumPercentage}%` }} />
                <div className="progress-text">{Math.round(mediumPercentage)}%</div>
              </div>
              <div className="progress-stats">
                <div className="progress-stat">
                  <span className="progress-stat-value">{mediumSolved}</span>
                  <span className="progress-stat-label">Solved</span>
                </div>
                <div className="progress-stat">
                  <span className="progress-stat-value">{mediumTotal}</span>
                  <span className="progress-stat-label">Total</span>
                </div>
              </div>
            </div>
            <div className="bottle-container">
              <div className="bottle-label hard">Hard</div>
              <div className="bottle">
                <div className="water hard" style={{ height: `${hardPercentage}%` }} />
                <div className="progress-text">{Math.round(hardPercentage)}%</div>
              </div>
              <div className="progress-stats">
                <div className="progress-stat">
                  <span className="progress-stat-value">{hardSolved}</span>
                  <span className="progress-stat-label">Solved</span>
                </div>
                <div className="progress-stat">
                  <span className="progress-stat-value">{hardTotal}</span>
                  <span className="progress-stat-label">Total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-menu-area">
          <div className="menu-box">
            <div className="menu-function" onClick={() => navigate('/profile')}>
              <i className="fas fa-user"></i>
              <span>Profile</span>
            </div>
            <div className="menu-function" onClick={() => navigate('/settings')}>
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </div>
            <div className="menu-function" onClick={() => navigate('/achievements')}>
              <i className="fas fa-trophy"></i>
              <span>Achievements</span>
            </div>
            <div className="menu-function" onClick={() => navigate('/leaderboard')}>
              <i className="fas fa-chart-line"></i>
              <span>Leaderboard</span>
            </div>
          </div>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search problems..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-bar">
          <button
            className={`filter-button ${difficultyFilter === 'all' ? 'active' : ''}`}
            onClick={() => setDifficultyFilter('all')}
          >
            All Difficulties
          </button>
          <button
            className={`filter-button ${difficultyFilter === 'Easy' ? 'active' : ''}`}
            onClick={() => setDifficultyFilter('Easy')}
          >
            Easy
          </button>
          <button
            className={`filter-button ${difficultyFilter === 'Medium' ? 'active' : ''}`}
            onClick={() => setDifficultyFilter('Medium')}
          >
            Medium
          </button>
          <button
            className={`filter-button ${difficultyFilter === 'Hard' ? 'active' : ''}`}
            onClick={() => setDifficultyFilter('Hard')}
          >
            Hard
          </button>
          <button
            className={`filter-button ${statusFilter === 'all' ? 'active' : ''}`}
            onClick={() => setStatusFilter('all')}
          >
            All Status
          </button>
          <button
            className={`filter-button ${statusFilter === 'solved' ? 'active' : ''}`}
            onClick={() => setStatusFilter('solved')}
          >
            Solved
          </button>
          <button
            className={`filter-button ${statusFilter === 'attempted' ? 'active' : ''}`}
            onClick={() => setStatusFilter('attempted')}
          >
            Attempted
          </button>
        </div>
      </div>

      <div className="problems-table">
        <div className="table-header">
          <div className="header-item" onClick={() => handleSort('id')}>
            S.No. {sortBy === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}
          </div>
          <div className="header-item" onClick={() => handleSort('status')}>
            Status {sortBy === 'status' && (sortOrder === 'asc' ? '↑' : '↓')}
          </div>
          <div className="header-item" onClick={() => handleSort('title')}>
            Problem {sortBy === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}
          </div>
          <div className="header-item" onClick={() => handleSort('difficulty')}>
            Difficulty {sortBy === 'difficulty' && (sortOrder === 'asc' ? '↑' : '↓')}
          </div>
        </div>

        {filteredChallenges.map((challenge, index) => (
          <Link
            to={`/problem/${challenge.id}`}
            key={challenge.id}
            className="problem-row"
          >
            <div className="sno">{index + 1}</div>
            <div className="status">
              <span className={`status-indicator text-${getProblemStatus(challenge.id) === 'solved' ? 'green' : getProblemStatus(challenge.id) === 'attempted' ? 'yellow' : 'gray'}-500`}>
                {getProblemStatus(challenge.id)}
              </span>
            </div>
            <div className="title">{challenge.title}</div>
            <div className={`difficulty ${challenge.difficulty.toLowerCase()}`}>{challenge.difficulty}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProblemList; 
