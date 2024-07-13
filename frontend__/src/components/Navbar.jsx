// import React, { useState } from "react";
// import logo from "../assets/myntra_logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { HiOutlineUser } from "react-icons/hi2";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoBagOutline } from "react-icons/io5";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdClose } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCategory } from "../redux/products/productSlice";
// import { logoutSuccessful } from "../redux/user/userSlice";


// const Navbar = () => {
//   // State to manage the open/close status of the menu and profile bar
//   const [isOpen, setIsOpen] = useState(false);
//   const [profileBarOpen, setProfileBarOpen] = useState(false);


//     // Get current user and total quantity from Redux store
//     const { currentUser } = useSelector((state) => state.user);
//     const { totalQuantity } = useSelector((state) => state.products);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // Toggle the mobile menu
//     const toggleMenu = () => {
//       setIsOpen(!isOpen);
//     };

//     // Navigate to the products page with the selected category
//     const navigateToProducts = (category) => {
//       dispatch(selectCategory(category));
//       navigate("/products");
//     };

//     // Handle user logout
//     const handleLogout = () => {
//       dispatch(logoutSuccessful());
//     };
  

//     return (
//       <nav>
//         <div className="hidden sm:flex items-center justify-around shadow-md">
//           <Link to="/">
//             <img className="h-16 w-16" src={logo} alt="logo" />
//           </Link>
//           <ul className="flex items-center lg:gap-12 gap-8 text-sm font-bold tracking-wide">
//             <Link
//               onClick={() => navigateToProducts("men's clothing")}
//               to="/products"
//             >
//               <li className="hover:text-gray-600">MEN</li>
//             </Link>
//             <Link
//               onClick={() => navigateToProducts("women's clothing")}
//               to="/products"
//             >
//               <li className="hover:text-gray-600">WOMEN</li>
//             </Link>
//             <Link
//               onClick={() => navigateToProducts("electronics")}
//               to="/products"
//             >
//               <li className="hover:text-gray-600">HOME & LIVING</li>
//             </Link>
//             <Link onClick={() => navigateToProducts("jewelery")} to="/products">
//               <li className="hover:text-gray-600">BEAUTY</li>
//             </Link>
//           </ul>

//           <ul className="flex gap-8 text-sm">
//             <li
//               onMouseEnter={() => setProfileBarOpen(true)}
//               onMouseLeave={() => setProfileBarOpen(false)}
//               className="relative transition-all duration-500"
//             >
//               <div className="flex flex-col items-center">
//                 <HiOutlineUser className="text-lg" />
//                 <h3 className="font-semibold">Profile</h3>
//                 {profileBarOpen && (
//                   <div className="absolute transition-all duration-500 shadow-md top-10 z-10 w-72 bg-white p-3">
//                     <div className="border-b pb-4">
//                       {currentUser ? (
//                         <>
//                           <h3 className="font-semibold">Hello Myntra User</h3>
//                           <p className="text-sm mt-1">{currentUser.email}</p>
//                           <button
//                             onClick={handleLogout}
//                             className="p-1 font-semibold"
//                           >
//                             Log out
//                           </button>
//                         </>
//                       ) : (
//                         <>
//                           <h3 className="font-semibold">Welcome</h3>
//                           <p className="text-sm mt-1 mb-4">
//                             To access account and manage orders
//                           </p>
//                           <Link
//                             to="/signin"
//                             className="border hover:border-pink-700 p-2 w-2/3 text-center cursor-pointer text-pink-700 font-semibold"
//                           >
//                             LOGIN / SIGNUP
//                           </Link>
//                         </>
//                       )}
//                     </div>

//                     <Link
//                       to="/bag"
//                       className="hover:font-bold mt-2 cursor-pointer text-sm text-gray-700"
//                     >
//                       Cart
//                     </Link>

//                     <div>
//                       <Link
//                         to="/wishlist"
//                         className="hover:font-bold mt-1 cursor-pointer text-sm text-gray-700"
//                       >
//                         Wishlist
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </li>
//             <Link to="/wishlist">
//               <li className="flex flex-col items-center">
//                 <IoIosHeartEmpty className="text-lg" />
//                 <h3 className="font-semibold">Wishlist</h3>
//               </li>
//             </Link>
//             <div className="relative px-2">
//               {totalQuantity > 0 && (
//                 <p className="text-xs bottom-8 px-1 bg-pink-700 text-white rounded-full absolute right-0 z-10">
//                   {totalQuantity}
//                 </p>
//               )}
//               <Link className="relative" to="/bag">
//                 <li className="flex flex-col items-center">
//                   <IoBagOutline className="text-lg" />
//                   <h3 className="font-semibold">Bag</h3>
//                 </li>
//               </Link>
//             </div>
//           </ul>
//         </div>

//         <div className="sm:hidden">
//           <div className="flex items-center justify-between py-1 px-6">
//             <Link to="/">
//               <img className="h-16 w-16" src={logo} alt="logo" />
//             </Link>

//             <ul className="flex gap-8 text-sm justify-center">
//               <li
//                 onMouseEnter={() => setProfileBarOpen(true)}
//                 onMouseLeave={() => setProfileBarOpen(false)}
//                 className="relative transition-all duration-500"
//               >
//                 <div className="flex flex-col items-center">
//                   <HiOutlineUser className="text-lg" />
//                   <h3 className="font-semibold">Profile</h3>
//                   {profileBarOpen && (
//                     <div className="absolute transition-all duration-500 shadow-md top-10 z-10 w-72 bg-white p-3">
//                       <div className="border-b pb-4">
//                         {currentUser ? (
//                           <>
//                             <h3 className="font-semibold">Hello Myntra User</h3>
//                             <p className="text-sm mt-1">{currentUser.email}</p>
//                             <button
//                               onClick={handleLogout}
//                               className="p-1 font-semibold"
//                             >
//                               Log out
//                             </button>
//                           </>
//                         ) : (
//                           <>
//                             <h3 className="font-semibold">Welcome</h3>
//                             <p className="text-sm mt-1 mb-4">
//                               To access account and manage orders
//                             </p>
//                             <Link
//                               to="/signin"
//                               className="border hover:border-pink-700 p-2 w-2/3 text-center cursor-pointer text-pink-700 font-semibold"
//                             >
//                               LOGIN / SIGNUP
//                             </Link>
//                           </>
//                         )}
//                       </div>

//                       <Link
//                         to="/bag"
//                         className="hover:font-bold mt-2 cursor-pointer text-sm text-gray-700"
//                       >
//                         Cart
//                       </Link>

//                       <div>
//                         <Link
//                           to="/wishlist"
//                           className="hover:font-bold mt-1 cursor-pointer text-sm text-gray-700"
//                         >
//                           Wishlist
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </li>
//               <Link to="/wishlist">
//                 <li className="flex flex-col items-center">
//                   <IoIosHeartEmpty className="text-lg" />
//                   <h3 className="font-semibold">Wishlist</h3>
//                 </li>
//               </Link>
//               <div className="relative px-2">
//                 {totalQuantity > 0 && (
//                   <p className="text-xs bottom-8 px-1 bg-pink-700 text-white rounded-full absolute right-0 z-10">
//                     {totalQuantity}
//                   </p>
//                 )}
//                 <Link className="relative" to="/bag">
//                   <li className="flex flex-col items-center">
//                     <IoBagOutline className="text-lg" />
//                     <h3 className="font-semibold">Bag</h3>
//                   </li>
//                 </Link>
//               </div>
//             </ul>

//             <div
//               onClick={toggleMenu}
//               className="text-3xl transition-all duration-300"
//             >
//               {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
//             </div>
//           </div>

//           <div
//             className={`md:hidden ${isOpen ? "block" : "hidden"
//               } text-center transition-all duration-300`}
//           >
//             <div className="shadow-b py-6 shadow-sm bg-pink-50 flex flex-col justify-center gap-4 text-sm font-bold text-black tracking-wide">
//               <Link
//                 onClick={() => {
//                   navigateToProducts("men's clothing");
//                   toggleMenu();
//                 }}
//                 to="/products"
//               >
//                 MEN
//               </Link>
//               <Link
//                 onClick={() => {
//                   navigateToProducts("women's clothing");
//                   toggleMenu();
//                 }}
//                 to="/products"
//               >
//                 WOMEN
//               </Link>
//               <Link
//                 onClick={() => {
//                   navigateToProducts("electronics");
//                   toggleMenu();
//                 }}
//                 to="/products"
//               >
//                 HOME & LIVING
//               </Link>
//               <Link
//                 onClick={() => {
//                   navigateToProducts("jewelery");
//                   toggleMenu();
//                 }}
//                 to="/products"
//               >
//                 BEAUTY
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   };

//   export default Navbar;


// import React, { useState } from "react";
// import logo from "../assets/myntra_logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { HiOutlineUser } from "react-icons/hi2";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoBagOutline } from "react-icons/io5";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdClose } from "react-icons/io";
// import { FiSearch } from "react-icons/fi"; // Search icon
// import { useDispatch, useSelector } from "react-redux";
// import { selectCategory } from "../redux/products/productSlice";
// import { logoutSuccessful } from "../redux/user/userSlice";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [profileBarOpen, setProfileBarOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false); // State for search bar

//   const { currentUser } = useSelector((state) => state.user);
//   const { totalQuantity } = useSelector((state) => state.products);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navigateToProducts = (category) => {
//     dispatch(selectCategory(category));
//     navigate("/products");
//   };

//   const handleLogout = () => {
//     dispatch(logoutSuccessful());
//   };

//   const toggleSearchBar = () => {
//     setSearchOpen(!searchOpen);
//   };

//   return (
//     <nav>
//       <div className="hidden sm:flex items-center justify-around shadow-md">
//         <Link to="/">
//           <img className="h-16 w-16" src={logo} alt="logo" />
//         </Link>
//         <ul className="flex items-center lg:gap-12 gap-8 text-sm font-bold tracking-wide">
//           <Link
//             onClick={() => navigateToProducts("men's clothing")}
//             to="/products"
//           >
//             <li className="hover:text-gray-600">MEN</li>
//           </Link>
//           <Link
//             onClick={() => navigateToProducts("women's clothing")}
//             to="/products"
//           >
//             <li className="hover:text-gray-600">WOMEN</li>
//           </Link>
//           <Link
//             onClick={() => navigateToProducts("electronics")}
//             to="/products"
//           >
//             <li className="hover:text-gray-600">HOME & LIVING</li>
//           </Link>
//           <Link onClick={() => navigateToProducts("jewelery")} to="/products">
//             <li className="hover:text-gray-600">BEAUTY</li>
//           </Link>
//         </ul>

//         <ul className="flex gap-8 text-sm">
//           <li
//             onMouseEnter={() => setProfileBarOpen(true)}
//             onMouseLeave={() => setProfileBarOpen(false)}
//             className="relative transition-all duration-500"
//           >
//             <div className="flex flex-col items-center">
//               <HiOutlineUser className="text-lg" />
//               <h3 className="font-semibold">Profile</h3>
//               {profileBarOpen && (
//                 <div className="absolute transition-all duration-500 shadow-md top-10 z-10 w-72 bg-white p-3">
//                   <div className="border-b pb-4">
//                     {currentUser ? (
//                       <>
//                         <h3 className="font-semibold">Hello Myntra User</h3>
//                         <p className="text-sm mt-1">{currentUser.email}</p>
//                         <button
//                           onClick={handleLogout}
//                           className="p-1 font-semibold"
//                         >
//                           Log out
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <h3 className="font-semibold">Welcome</h3>
//                         <p className="text-sm mt-1 mb-4">
//                           To access account and manage orders
//                         </p>
//                         <Link
//                           to="/signin"
//                           className="border hover:border-pink-700 p-2 w-2/3 text-center cursor-pointer text-pink-700 font-semibold"
//                         >
//                           LOGIN / SIGNUP
//                         </Link>
//                       </>
//                     )}
//                   </div>

//                   <Link
//                     to="/bag"
//                     className="hover:font-bold mt-2 cursor-pointer text-sm text-gray-700"
//                   >
//                     Cart
//                   </Link>

//                   <div>
//                     <Link
//                       to="/wishlist"
//                       className="hover:font-bold mt-1 cursor-pointer text-sm text-gray-700"
//                     >
//                       Wishlist
//                     </Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </li>
//           <Link to="/wishlist">
//             <li className="flex flex-col items-center">
//               <IoIosHeartEmpty className="text-lg" />
//               <h3 className="font-semibold">Wishlist</h3>
//             </li>
//           </Link>
//           <div className="relative px-2">
//             {totalQuantity > 0 && (
//               <p className="text-xs bottom-8 px-1 bg-pink-700 text-white rounded-full absolute right-0 z-10">
//                 {totalQuantity}
//               </p>
//             )}
//             <Link className="relative" to="/bag">
//               <li className="flex flex-col items-center">
//                 <IoBagOutline className="text-lg" />
//                 <h3 className="font-semibold">Bag</h3>
//               </li>
//             </Link>
//           </div>
//           <li className="flex flex-col items-center cursor-pointer" onClick={toggleSearchBar}>
//             <FiSearch className="text-lg" />
//             <h3 className="font-semibold">Search</h3>
//           </li>
//         </ul>
//       </div>

//       <div className="sm:hidden">
//         <div className="flex items-center justify-between py-1 px-6">
//           <Link to="/">
//             <img className="h-16 w-16" src={logo} alt="logo" />
//           </Link>

//           <ul className="flex gap-8 text-sm justify-center">
//             <li
//               onMouseEnter={() => setProfileBarOpen(true)}
//               onMouseLeave={() => setProfileBarOpen(false)}
//               className="relative transition-all duration-500"
//             >
//               <div className="flex flex-col items-center">
//                 <HiOutlineUser className="text-lg" />
//                 <h3 className="font-semibold">Profile</h3>
//                 {profileBarOpen && (
//                   <div className="absolute transition-all duration-500 shadow-md top-10 z-10 w-72 bg-white p-3">
//                     <div className="border-b pb-4">
//                       {currentUser ? (
//                         <>
//                           <h3 className="font-semibold">Hello Myntra User</h3>
//                           <p className="text-sm mt-1">{currentUser.email}</p>
//                           <button
//                             onClick={handleLogout}
//                             className="p-1 font-semibold"
//                           >
//                             Log out
//                           </button>
//                         </>
//                       ) : (
//                         <>
//                           <h3 className="font-semibold">Welcome</h3>
//                           <p className="text-sm mt-1 mb-4">
//                             To access account and manage orders
//                           </p>
//                           <Link
//                             to="/signin"
//                             className="border hover:border-pink-700 p-2 w-2/3 text-center cursor-pointer text-pink-700 font-semibold"
//                           >
//                             LOGIN / SIGNUP
//                           </Link>
//                         </>
//                       )}
//                     </div>

//                     <Link
//                       to="/bag"
//                       className="hover:font-bold mt-2 cursor-pointer text-sm text-gray-700"
//                     >
//                       Cart
//                     </Link>

//                     <div>
//                       <Link
//                         to="/wishlist"
//                         className="hover:font-bold mt-1 cursor-pointer text-sm text-gray-700"
//                       >
//                         Wishlist
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </li>
//             <Link to="/wishlist">
//               <li className="flex flex-col items-center">
//                 <IoIosHeartEmpty className="text-lg" />
//                 <h3 className="font-semibold">Wishlist</h3>
//               </li>
//             </Link>
//             <div className="relative px-2">
//               {totalQuantity > 0 && (
//                 <p className="text-xs bottom-8 px-1 bg-pink-700 text-white rounded-full absolute right-0 z-10">
//                   {totalQuantity}
//                 </p>
//               )}
//               <Link className="relative" to="/bag">
//                 <li className="flex flex-col items-center">
//                   <IoBagOutline className="text-lg" />
//                   <h3 className="font-semibold">Bag</h3>
//                 </li>
//               </Link>
//             </div>
//             <li className="flex flex-col items-center cursor-pointer" onClick={toggleSearchBar}>
//               <FiSearch className="text-lg" />
//               <h3 className="font-semibold">Search</h3>
//             </li>
//           </ul>

//           <div
//             onClick={toggleMenu}
//             className="text-3xl transition-all duration-300"
//           >
//             {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
//           </div>
//         </div>

//         <div
//           className={`md:hidden ${isOpen ? "block" : "hidden"
//             } text-center transition-all duration-300`}
//         >
//           <div className="shadow-b py-6 shadow-sm bg-pink-50 flex flex-col justify-center gap-4 text-sm font-bold text-black tracking-wide">
//             <Link
//               onClick={() => {
//                 navigateToProducts("men's clothing");
//                 toggleMenu();
//               }}
//               to="/products"
//             >
//               MEN
//             </Link>
//             <Link
//               onClick={() => {
//                 navigateToProducts("women's clothing");
//                 toggleMenu();
//               }}
//               to="/products"
//             >
//               WOMEN
//             </Link>
//             <Link
//               onClick={() => {
//                 navigateToProducts("electronics");
//                 toggleMenu();
//               }}
//               to="/products"
//             >
//               HOME & LIVING
//             </Link>
//             <Link
//               onClick={() => {
//                 navigateToProducts("jewelery");
//                 toggleMenu();
//               }}
//               to="/products"
//             >
//               BEAUTY
//             </Link>
//           </div>
//         </div>
//       </div>

//       {searchOpen && (
//         <div className="flex justify-center items-center w-full mt-4">
//           <div className="relative w-2/3 sm:w-1/3">
//             <input
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Search..."
//             />
//             <div className="absolute right-0 top-0 mt-2 mr-2">
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 id="upload"
//               />
//               <label htmlFor="upload" className="cursor-pointer">
//                 <FiSearch className="text-xl" />
//               </label>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import logo from "../assets/myntra_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUpload } from "react-icons/ai"; // Upload icon
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../redux/products/productSlice";
import { logoutSuccessful } from "../redux/user/userSlice";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileBarOpen, setProfileBarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const { currentUser } = useSelector((state) => state.user);
  const { totalQuantity } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToProducts = (category) => {
    dispatch(selectCategory(category));
    navigate("/products");
  };

  const handleLogout = () => {
    dispatch(logoutSuccessful());
  };

  const toggleSearchBar = () => {
    setSearchOpen(!searchOpen);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    const storage = getStorage();
    const storageRef = ref(storage, `images/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Upload failed", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          alert("File uploaded successfully!");
        });
      }
    );
  };

  return (
    <nav>
      <div className="hidden sm:flex items-center justify-around shadow-md">
        <Link to="/">
          <img className="h-16 w-16" src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center lg:gap-12 gap-8 text-sm font-bold tracking-wide">
          <Link onClick={() => navigateToProducts("men's clothing")} to="/products">
            <li className="hover:text-gray-600">MEN</li>
          </Link>
          <Link onClick={() => navigateToProducts("women's clothing")} to="/products">
            <li className="hover:text-gray-600">WOMEN</li>
          </Link>
          <Link onClick={() => navigateToProducts("electronics")} to="/products">
            <li className="hover:text-gray-600">HOME & LIVING</li>
          </Link>
          <Link onClick={() => navigateToProducts("jewelery")} to="/products">
            <li className="hover:text-gray-600">BEAUTY</li>
          </Link>
        </ul>

        <ul className="flex gap-8 text-sm">
          <li
            onMouseEnter={() => setProfileBarOpen(true)}
            onMouseLeave={() => setProfileBarOpen(false)}
            className="relative transition-all duration-500"
          >
            <div className="flex flex-col items-center">
              <HiOutlineUser className="text-lg" />
              <h3 className="font-semibold">Profile</h3>
              {profileBarOpen && (
                <div className="absolute transition-all duration-500 shadow-md top-10 z-10 w-72 bg-white p-3">
                  <div className="border-b pb-4">
                    {currentUser ? (
                      <>
                        <h3 className="font-semibold">Hello Myntra User</h3>
                        <p className="text-sm mt-1">{currentUser.email}</p>
                        <button onClick={handleLogout} className="p-1 font-semibold">
                          Log out
                        </button>
                      </>
                    ) : (
                      <>
                        <h3 className="font-semibold">Welcome</h3>
                        <p className="text-sm mt-1 mb-4">To access account and manage orders</p>
                        <Link
                          to="/signin"
                          className="border hover:border-pink-700 p-2 w-2/3 text-center cursor-pointer text-pink-700 font-semibold"
                        >
                          LOGIN / SIGNUP
                        </Link>
                      </>
                    )}
                  </div>

                  <Link to="/bag" className="hover:font-bold mt-2 cursor-pointer text-sm text-gray-700">
                    Cart
                  </Link>

                  <div>
                    <Link to="/wishlist" className="hover:font-bold mt-1 cursor-pointer text-sm text-gray-700">
                      Wishlist
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </li>
          <Link to="/wishlist">
            <li className="flex flex-col items-center">
              <IoIosHeartEmpty className="text-lg" />
              <h3 className="font-semibold">Wishlist</h3>
            </li>
          </Link>
          <div className="relative px-2">
            {totalQuantity > 0 && (
              <p className="text-xs bottom-8 px-1 bg-pink-700 text-white rounded-full absolute right-0 z-10">
                {totalQuantity}
              </p>
            )}
            <Link className="relative" to="/bag">
              <li className="flex flex-col items-center">
                <IoBagOutline className="text-lg" />
                <h3 className="font-semibold">Bag</h3>
              </li>
            </Link>
          </div>
          <li className="flex flex-col items-center cursor-pointer" onClick={toggleSearchBar}>
            <FiSearch className="text-lg" />
            <h3 className="font-semibold">Search</h3>
          </li>
        </ul>
      </div>

      <div className="sm:hidden">
        <div className="flex items-center justify-between py-1 px-6">
          <Link to="/">
            <img className="h-16 w-16" src={logo} alt="logo" />
          </Link>

          <ul className="flex gap-8 text-sm justify-center">
            <li
              onMouseEnter={() => setProfileBarOpen(true)}
              onMouseLeave={() => setProfileBarOpen(false)}
              className="relative transition-all duration-500"
            >
              <div className="flex flex-col items-center">
                <HiOutlineUser className="text-lg" />
                <h3 className="font-semibold">Profile</h3>
                {profileBarOpen && (
                  <div className="absolute transition-all duration-500 shadow-md top-10 z-10 w-72 bg-white p-3">
                    <div className="border-b pb-4">
                      {currentUser ? (
                        <>
                          <h3 className="font-semibold">Hello Myntra User</h3>
                          <p className="text-sm mt-1">{currentUser.email}</p>
                          <button onClick={handleLogout} className="p-1 font-semibold">
                            Log out
                          </button>
                        </>
                      ) : (
                        <>
                          <h3 className="font-semibold">Welcome</h3>
                          <p className="text-sm mt-1 mb-4">To access account and manage orders</p>
                          <Link
                            to="/signin"
                            className="border hover:border-pink-700 p-2 w-2/3 text-center cursor-pointer text-pink-700 font-semibold"
                          >
                            LOGIN / SIGNUP
                          </Link>
                        </>
                      )}
                    </div>

                    <Link to="/bag" className="hover:font-bold mt-2 cursor-pointer text-sm text-gray-700">
                      Cart
                    </Link>

                    <div>
                      <Link to="/wishlist" className="hover:font-bold mt-1 cursor-pointer text-sm text-gray-700">
                        Wishlist
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <Link to="/wishlist">
              <li className="flex flex-col items-center">
                <IoIosHeartEmpty className="text-lg" />
                <h3 className="font-semibold">Wishlist</h3>
              </li>
            </Link>
            <div className="relative px-2">
              {totalQuantity > 0 && (
                <p className="text-xs bottom-8 px-1 bg-pink-700 text-white rounded-full absolute right-0 z-10">
                  {totalQuantity}
                </p>
              )}
              <Link className="relative" to="/bag">
                <li className="flex flex-col items-center">
                  <IoBagOutline className="text-lg" />
                  <h3 className="font-semibold">Bag</h3>
                </li>
              </Link>
            </div>
            <li className="flex flex-col items-center cursor-pointer" onClick={toggleSearchBar}>
              <FiSearch className="text-lg" />
              <h3 className="font-semibold">Search</h3>
            </li>
          </ul>

          <div onClick={toggleMenu} className="text-3xl transition-all duration-300">
            {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? "block" : "hidden"} text-center transition-all duration-300`}>
          <div className="shadow-b py-6 shadow-sm bg-pink-50 flex flex-col justify-center gap-4 text-sm font-bold text-black tracking-wide">
            <Link
              onClick={() => {
                navigateToProducts("men's clothing");
                toggleMenu();
              }}
              to="/products"
            >
              MEN
            </Link>
            <Link
              onClick={() => {
                navigateToProducts("women's clothing");
                toggleMenu();
              }}
              to="/products"
            >
              WOMEN
            </Link>
            <Link
              onClick={() => {
                navigateToProducts("electronics");
                toggleMenu();
              }}
              to="/products"
            >
              HOME & LIVING
            </Link>
            <Link
              onClick={() => {
                navigateToProducts("jewelery");
                toggleMenu();
              }}
              to="/products"
            >
              BEAUTY
            </Link>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="flex justify-center items-center w-full mt-4">
          <div className="relative w-2/3 sm:w-1/3">
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Search..." />
            <div className="absolute right-0 top-0 mt-2 mr-2">
              <input type="file" accept="image/*" className="hidden" id="upload" onChange={handleFileChange} />
              <label htmlFor="upload" className="cursor-pointer">
                <AiOutlineUpload className="text-xl" /> {/* Use Upload icon */}
              </label>
            </div>
            {selectedFile && (
              <button
                onClick={handleUpload}
                className="absolute right-0 bottom-0 mb-2 mr-2 bg-pink-700 text-white p-2 rounded-md"
              >
                Upload
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





