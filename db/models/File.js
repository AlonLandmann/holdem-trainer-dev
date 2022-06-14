import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({
  email: String,
  username: String,
  createdAt: Date,
  ranges: [{
    name: String,
    group: String,
    nrPlayers: Number,
    position: Number,
    history: [Number],
    previousHeroActions: [{
      rangeName: String,
      selectedOption: Number
    }],
    matrix: [Number],
    options: [{
      label: String,
      hotkey: Number
    }]
  }],
  stats: {
    spots: Number,
    correct: Number,
    time: Number,
    sessions: Number,
    lastSessions: [{
      date: Date,
      set: String,
      spots: Number,
      correct: Number,
      time: Number
    }]
  }
})

export default mongoose.models.File || mongoose.model('File', fileSchema)
