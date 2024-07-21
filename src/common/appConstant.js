import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import wave from "../assets/images/wave.png";
import sad from "../assets/images/sad.png";

export const postArray = [
    {
      firstName: "Theresa",
      lastName: "Webb",
      time: "8 mins ago",
      profilePicture: user1,
      feeling: wave,
      title:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: {
        comments: [],
        totalCount: 24,
      },
      isEdited: false,
    },
    {
      firstName: "Marvin",
      lastName: "McKinney",
      time: "18 mins ago",
      profilePicture: user2,
      feeling: sad,
      title:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: {
        comments: [],
        totalCount: 5,
      },
      isEdited: true,
    },
  ];