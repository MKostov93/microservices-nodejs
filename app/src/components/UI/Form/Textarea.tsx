/**
 * EXTERNAL DEPENDENCIES.
 */
import styled from "styled-components";

const Textarea = styled.textarea`
    display: block;
    width: 100%;
    min-height: 100px;
    padding: 0.25rem;
    border: 1px solid ${props => props.theme.veryLightGrey};
    resize: vertical;
    font-size: 0.9rem;
`;

export default Textarea;