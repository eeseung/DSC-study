import React, { useState } from 'react';

const Board = () => {
    const [boards, setBoards] = useState([
        {id:0, title:"첫 번째 글", contents:"React 첫 Study"},
        {id:1, title:"두 번째 글", contents:"다들 화이팅"}
    ]);

    const [inputTitle, setInputTitle] = useState("");
    const [inputContents, setInputContents] = useState("");
    const [nextId, setNextId] = useState(2);

    const onChangeTitle = e => setInputTitle(e.target.value);
    const onChangeContents = e => setInputContents(e.target.value);

    const onClickPost = () => {
        const nextBoards = boards.concat({
            id: nextId,
            title: inputTitle,
            contents: inputContents
        });
        setNextId(nextId+1);
        setBoards(nextBoards);
        setInputTitle("");
        setInputContents("");
    };

    const onRemove = id => {
        const nextBoards = boards.filter(board => board.id !== id);
        setBoards(nextBoards);
    };

    const boardsList = boards.map(board => (
        <div key={board.id} onDoubleClick={() => onRemove(board.id)}>
            글 제목 : {board.title}
            <br/>
            내용 : {board.contents}
        </div>
    ));

    return (
        <div>
            <h1>게시판</h1>
            <input 
                type="text"
                name="title"
                placeholder="글 제목"
                value={inputTitle}
                onChange={onChangeTitle}
            />
            <textarea
                name="contents"
                placeholder="내용"
                cols="30"
                rows="3"
                value={inputContents}
                onChange={onChangeContents}
            />
            <button onClick={onClickPost}>작성하기</button>
            <div>{boardsList}</div>
        </div>
        
    )
}
export default Board;