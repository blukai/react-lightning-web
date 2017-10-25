import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const disabledStyles = css`
	color: rgba(0,0,0,.25);
	cursor: not-allowed;

	&:hover {
		background-color: white;
	}
`;

const Input = styled.button`
	cursor: pointer;
	position: relative;
    display: inline-block;
    background-clip: border-box;
    border-radius: 0.25rem;
    line-height: 1.875rem;
    text-decoration: none;
    color: #0070d2;
    white-space: normal;
	user-select: none;
	padding: 0 1rem;
    text-align: center;
    border: 1px solid #dddbda;
    transition: border 0.15s linear;
    background-color: white;

	font-size: ${props => props.fontSize}px;

	&:hover{
		background-color: #0088ff;
	}

	&:active {
		color: #00396b;
		background-color: #eef1f6;
	}

	&:hover,
	&:focus {
		background-color: #f4f6f9;
	}

	${({ disabled }) => disabled && disabledStyles }}
`;

export default ({ value, disabled = false, fontSize = 12 }) => (
	<Input disabled={disabled} fontSize={fontSize}>
		{value}
	</Input>
)
