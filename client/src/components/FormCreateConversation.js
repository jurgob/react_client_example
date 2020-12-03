// import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";

function FormCreateConversation({ onSubmit }) {
    const { register, handleSubmit, errors } = useForm();

    return (
        <form name="CreateConversation" id="CreateConversation" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="conversation_name">Name</label>

            {/* use aria-invalid to indicate field contain error */}
            <input
                type="text"
                id="conversation_name"
                name="conversation_name"
                aria-invalid={errors.conversation_name ? "true" : "false"}
                ref={register({ required: true, maxLength: 30 })}
            />
            {errors.conversation_name && errors.conversation_name.type === "required" && (
                <span role="alert">This is required</span>
            )}
            {errors.conversation_name && errors.conversation_name.type === "maxLength" && (
                <span role="alert">Max length exceeded</span>
            )}
            <br />
            <label htmlFor="conversation_display_name">Display Name</label>
            <input
                type="text"
                id="conversation_display_name"
                name="conversation_display_name"
                aria-invalid={errors.conversation_display_name ? "true" : "false"}
                ref={register({ required: true, maxLength: 30 })}
            />

            {/* use role="alert" to announce the error message */}
            {errors.conversation_display_name && errors.conversation_display_name.type === "required" && (
                <span role="alert">This is required</span>
            )}
            {errors.conversation_display_name && errors.conversation_display_name.type === "maxLength" && (
                <span role="alert">Max length exceeded</span>
            )}
            <br />
            <input type="submit" />
        </form>
    )
}

export default FormCreateConversation