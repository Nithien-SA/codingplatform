const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/codingcoder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  totalProblemsSolved: { type: Number, default: 0 },
  easySolved: { type: Number, default: 0 },
  mediumSolved: { type: Number, default: 0 },
  hardSolved: { type: Number, default: 0 },
  solvedProblemIds: { type: [Number], default: [] },
  attemptedProblemIds: { type: [Number], default: [] },
  lastSolved: { type: String, default: '' }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

async function migrate() {
  const users = await User.find({});
  let updatedCount = 0;
  for (const user of users) {
    let changed = false;
    if (!Array.isArray(user.solvedProblemIds)) {
      user.solvedProblemIds = [];
      changed = true;
    }
    if (!Array.isArray(user.attemptedProblemIds)) {
      user.attemptedProblemIds = [];
      changed = true;
    }
    if (changed) {
      await user.save();
      updatedCount++;
    }
  }
  console.log(`Migration complete. Updated ${updatedCount} user(s).`);
  mongoose.disconnect();
}

migrate().catch(err => {
  console.error('Migration error:', err);
  mongoose.disconnect();
}); 