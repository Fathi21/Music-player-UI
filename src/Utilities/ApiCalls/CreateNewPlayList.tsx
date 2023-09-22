import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";
import UserDetails from "../../components/UserDetails";

async function CreateNewPlayList(songId: number, PlayListId: number) {
  const userId = UserDetails().userId;

  return await axios
    .post(urlCalls.CreateNewPlayList, {
      id: 1,
      PlayListName: "play List 1",
      Description:
        "Now that your identity is set up, you can configure the default text editor that will be used when Git needs you to type in a message. If not configured, Git uses your system’s default edito",
      PhotoCover: "/media/uploads/PhotoCover/pexels-rahul-shah-2268487.jpg",
      UserId: userId,
      CreatedAt: "2023-01-29T18:20:31Z",
    })
    .then(function (response) {
      return response.data[0];
    })
    .catch(function (error) {
      return error;
    });
}

export default CreateNewPlayList;
