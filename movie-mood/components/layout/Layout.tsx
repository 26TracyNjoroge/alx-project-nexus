import Header from "./Header";
import Footer from "./Footer";
import { LayoutProp } from "@/interfaces";

const Layout: React.FC<LayoutProp> = ({children}) => {
    return (
        <>
        <Header />
        <main className="min-h-screen bg-[#101014]">{children}</main>
        <Footer />
        </>
    )
}

export default Layout;