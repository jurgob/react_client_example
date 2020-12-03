// import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";

function FormJoinConversation({ onSubmit }) {
    const { register, handleSubmit, errors } = useForm();

    return (
        <form name="joinConversation" id="joinConversation" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="conversation_join_id">Conversation ID:</label>

            <input
                type="text"
                id="conversation_join_id"
                name="conversation_join_id"
                aria-invalid={errors.conversation_join_id ? "true" : "false"}
                ref={register({ required: true, maxLength: 40 })}
            />

            {errors.conversation_join_id && errors.conversation_join_id.type === "required" && (
                <span role="alert">This is required</span>
            )}
            <br />

            <input type="submit" value="Join Conversation" />
        </form>
    )
}

export default FormJoinConversation