const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
 {
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    currentTeam: {
        type: String,
        required: true,
    },
    marketValue: {
        type: Number,
        required: true
   },
    age: {
        type: Number,
        required: true
    },
    skillfulLeg: {
        type: String,
        required: true,
        enum: ["Right", "Left"]
    },
    playerPosition: {
        type: String,
        required: true,
        trim: true,
        enum: ["goalkeeper", "defense", "midfielder", "forward"]
    },
    imageUrl : String,
    creator:{
        type: Schema.Types.ObjectId,
        ref: "User"     
    }
    
}
);

const Player = model("Player", playerSchema);

module.exports = Player 