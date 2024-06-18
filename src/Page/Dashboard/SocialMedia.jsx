import { AiOutlineLike, AiOutlineUser } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  const socialMedia = [
    {
      name: "Facebook",
      followers: 1200,
      icon: <FaFacebook className="text-blue-700" />,
      type: "followers",
      color:"bg-gradient-to-r to-blue-300 from-lime-400"
    },
    {
      name: "Twitter",
      followers: 800,
      icon: <FaTwitter className="text-blue-700" />,
      type: "followers",
      color:"bg-gradient-to-b to-blue-500 from-green-400"
    },
    {
      name: "YouTube",
      subscribers: 500,
      icon: <FaYoutube className="text-red-600" />,
      type: "subscribers",
      color:"bg-gradient-to-r to-red-300 from-blue-400"
    },
  ];

  return (
    <div className="text-center">
      {socialMedia.map((media, index) => (
        <div key={index} className={`${media.color} shadow-md rounded-lg p-4 mb-4 text-white`}>
          <div className="flex items-center justify-center mb-2">
            {media.icon}
            <h3 className="text-lg font-bold ml-2">{media.name}</h3>
          </div>
          <p className="text-black-600 flex items-center justify-center">
            {media.type === "followers" ? (
              <>
                <AiOutlineUser className="mr-2 text-blue-600" />
                Followers: {media.followers}
              </>
            ) : (
              <>
                <AiOutlineLike className="mr-2 text-blue-600" />
                Subscribers: {media.subscribers}
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
