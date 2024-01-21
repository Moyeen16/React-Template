import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStore, setStateVals } from "../../state/slice/appSlice";
const HomePage = () => {
    const store = useSelector(selectStore);
    const [localVar, setLocalVar] = useState<number>(store.sampleStateVal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStateVals(localVar));
    }, [localVar]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLocalVar((prevVal) => prevVal + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                paddingTop: "4em",
            }}
        >
            <p style={{ fontSize: "18px" }}>
                Homepage : You have been on this page for {store.sampleStateVal}{" "}
                seconds.
            </p>
        </div>
    );
};
export default HomePage;
