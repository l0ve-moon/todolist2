import styled from "styled-components"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "../hooks/useNavigate";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";


export const TodoItem = ({ id, title, desc, isDone }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // TODO: onClickDelite 함수 만들기
    const onClickDelete = () => {
        dispatch(deleteTodo(id));
    };

    // TODO: onClickToggle 함수 만들기
    const onClickToggle = () => {
        dispatch(toggleTodo(id));
    };

    const onClickDetail = () => {
        navigate(`/todo/${id}`)
    }

    return (
        <StyledTodoContainer>
            <div className="contents-wrapper">
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
            </div>
            <div className="buttons=wrapper">
                <StyledTodoButton isDelete onClick={onClickDelete}>
                    삭제
                </StyledTodoButton>
                <StyledTodoButton isDone onClick={onClickToggle}>
                    {/* TODO todo  상태에 따라 다른 텍스트 보여주기 */}
                </StyledTodoButton>
                <StyledTodoButton onClick={onClickDetail}>상세</StyledTodoButton>
            </div>
        </StyledTodoContainer>
    );
};

const StyledTodoContainer = styled.div`
    height: fit-content;
    `

