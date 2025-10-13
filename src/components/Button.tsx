type btn = {
        fun?:()=>void;
        class?:string;
        btname?:string;
        }

export const Button = (prop:btn) => {

    const defaultClass = "p-3 text-lg cursor-pointer rounded-xl";
    const combinedClass = `${defaultClass} ${prop.class ?? ""}`;

    return (
        <>
            <button className={combinedClass} onClick={prop.fun}>
                {prop.btname}
            </button>
        </>
    )
}