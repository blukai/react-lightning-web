import React from 'react'
import styled from 'styled-components';

const Group = styled.div`
	& > button {
		border-radius: 0;

		&:first-child {
			border-radius: 0.25rem 0 0 0.25rem;
		}

		&:last-child {
			border-radius: 0 0.25rem 0.25rem 0;
		}

		&:not(:first-child) {
			margin-left: -1px;
		}
	}
`;

export default ({ children }) => (
	<Group role="group">
		{children}
	</Group>
);
