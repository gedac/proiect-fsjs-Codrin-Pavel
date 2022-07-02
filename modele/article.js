const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const articleSchema = new mongoose.Schema({
    titlu:{
        type: String,
        required: true
    },
    descriere:{
        type: String
    },
    articol:{
        type: String,
        required: true
    },
    creatLa:{
        type: Date,
        default: Date.now
    },
    slug:{
        type: String,
        required:true,
        unique: true
    }
})

articleSchema.pre('validate', function(next) {
    if(this.titlu){
        this.slug = slugify(this.titlu, { lower: true, strict: true})
    }
    next()
})

module.exports = mongoose.model('Article', articleSchema)