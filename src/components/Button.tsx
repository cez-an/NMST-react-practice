type btn = {
        fun?:()=>void;
        class?:string;
        btname?:string;
        }

export const Button = (prop:btn) => {

    const defaultClass = "px-2 py-1 text-sm cursor-pointer rounded-xl border-[1px]";
    const combinedClass = `${defaultClass} ${prop.class ?? ""}`;

    return (
        <>
            <button className={combinedClass} onClick={prop.fun}>
                {prop.btname}
            </button>
        </>
    )
}