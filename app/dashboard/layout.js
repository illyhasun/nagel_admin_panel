import Sidebar from '../components/ui/sidebar'

export default function DashboardLayout({ children }) {
    return (
        <>
            <Sidebar />
            {children}
        </>
    )
}