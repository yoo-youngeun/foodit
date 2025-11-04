import { useEffect, useRef } from "react";

function EditFoodForm({food, onSubmit}) {
    const inputRef = useRef(null);
    useEffect(()=>{
        if(inputRef.current) {
            inputRef.current.focus();
        }
    })
    const submit = (formData) => {
        const data = Object.fromEntries(formData.entries());
        onSubmit(data);
    }
    return (
        <form action={submit}>
            <input name="title" defaultValue={food.title} placeholder="이름을 입력하세요" ref={inputRef} />
            <input name="calorie" defaultValue={food.calorie} placeholder="KCal"/>
            <input name="content" defaultValue={food.content} placeholder="내용을 입력하세요."/>
            <button>작성완료</button>
        </form>
    )
}

export default EditFoodForm;