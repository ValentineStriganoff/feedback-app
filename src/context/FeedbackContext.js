import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const  [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'Very good, I was excited',
            rating: 10
        },
        {
            id: 2,
            text: 'Not so good, I was not excited',
            rating: 6
        },

        {
            id: 3,
            text: 'Not great, not terrible',
            rating: 7
        }


    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
//add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
// delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
// Set item to be updated
    const editFeedback = (item) => setFeedbackEdit({
        item,
        edit: true
    })
// Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
        )
    }
    
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,

    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext