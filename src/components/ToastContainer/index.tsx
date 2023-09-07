import { Toaster } from "react-hot-toast";


export const ToastContainer = () => {
    return (
        <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            containerStyle={{}}
            toastOptions={{
                className: 'bg-secondary text-gray-300'
            }}
        />
    )
}