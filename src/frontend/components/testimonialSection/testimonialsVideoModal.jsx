import ReactDOM from "react-dom";

export const getEmbedUrl = (url) => url.replace("watch?v=", "embed/");

export const VideoModal = ({ videoUrl, onClose }) => {
    if (!videoUrl) return null;
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[20px] flex items-center justify-center z-50">
            <div className="relative bg-white lg:p-4 p-2 rounded-lg lg:w-[auto] w-[98%]">
                <button
                    className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full"
                    onClick={onClose}
                >
                    ✕
                </button>
                <iframe
                    className='lg:w-[1000px] w-[100%] lg:h-[500px] h-[250px]'
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>,
        document.body
    );
};