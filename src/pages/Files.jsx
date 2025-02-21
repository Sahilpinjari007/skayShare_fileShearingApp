import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "../services/firebaseConfig";
import { MoonLoader } from "react-spinners";

const Files = () => {
  const [files, setFiles] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useUser();
  const db = getFirestore(app);

  useEffect(() => {
    setLoader(true);
    user && getFiles();
  }, [user]);

  const searchFile = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchQuery(searchTerm);

    if (searchTerm === "") {
      setFilteredData(files); // Reset to full data if search is empty
    } else {
      const filtered = files.filter(
        (file) => file.fileName.toLowerCase().includes(searchTerm) // Adjust 'name' field as needed
      );
      setFilteredData(filtered);
    }
  };

  const getFiles = async () => {
    const q = query(
      collection(db, "uploadedFile"),
      where("userEmail", "==", user.primaryEmailAddress.emailAddress)
    );

    const querySnapshot = await getDocs(q);
    const list = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFiles(list);
    setFilteredData(list);
    setLoader(false);
  };

  return (
    <div className="w-full h-[calc(100%-70px)] px-6">
      <div className="w-full pt-7">
        <h1 className=" text-2xl font-medium">My Files</h1>
      </div>

      <div className="w-full pt-5">
        <form className="w-full pb-5">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg text-[18px] outline-none"
              placeholder="Search Files..."
              required
              onChange={(e) => searchFile(e)}
              value={searchQuery}
            />
          </div>
        </form>
      </div>

      <div className="w-full py-7">
        <div className="overflow-x-auto">
          {loader ? (
            <div className="flex items-center justify-center mt-5">
              <MoonLoader size={30} color="#007dfc" />
            </div>
          ) : (
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-md">
              <thead className="text-left">
                <tr>
                  <th className="px-4 py-2 font-medium whitespace-nowrap min-w-[250px] lg:w-[50%]">
                    File Name
                  </th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">
                    Type
                  </th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap">
                    Size
                  </th>
                  <th className="px-4 py-2 font-medium whitespace-nowrap"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredData?.map((file) => {
                  return (
                    <tr className="odd:bg-gray-50" key={file?.id}>
                      <td className="px-4 py-2 font-medium truncate max-w-[250px]">
                        {file?.fileName}
                      </td>
                      <td className="px-4 py-2">{file?.fileType}</td>
                      <td className="px-4 py-2">{file?.fileSize} Bytes</td>
                      <td className="px-4 py-2">
                        <Link
                          to={`/file-preview/${file?.id}`}
                          className="text-primary font-medium"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Files;
