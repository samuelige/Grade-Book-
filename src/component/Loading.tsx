const Loading: React.FC = () => {
    return (
        <div className=" flex justify-center w-full">
            <div className="flex flex-row rounded-xl space-x-2 shadow-2xl p-4 items-center w-auto">
                <div className=" animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
                <small className="text-midnightblue">Please wait...</small>
            </div>
        </div>
    );
}

export default Loading;