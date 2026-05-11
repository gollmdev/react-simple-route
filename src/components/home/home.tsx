import type { FC } from "react";

interface HomeProps {
    name: string;
}

const Home: FC<HomeProps> = ({ name }) => {
    return <>
   
    Home {name}
    </>
}
export default Home;