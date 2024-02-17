import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineRead, AiOutlineShop, AiOutlineApartment } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const DataManagement = () => {
    const [showSubMenu1, setShowSubMenu1] = useState(false);
    const [showSubMenu2, setShowSubMenu2] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleSubMenu1 = () => {
        setShowSubMenu1(!showSubMenu1);
    };

    const toggleSubMenu2 = () => {
        setShowSubMenu2(!showSubMenu2);
    };

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <div className="flex h-full">
            {/* Left Sidebar */}
            <div className="w-1/6 bg-[#eaf5ec] p-8 text-black">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold ">Data Management</h1>
                    <ul className="mt-4 space-y-5 text-xl">
                        <li
                            className={`flex items-center cursor-pointer ${selectedItem === 'Tổng quan' ? 'text-blue-500' : ''
                                }`}
                            onClick={() => handleItemClick('Tổng quan')}
                        >
                            <AiOutlineShop className="mr-2" />
                            Tổng quan
                        </li>
                        <li
                            className={`flex items-center cursor-pointer ${selectedItem === 'Tài khoản' ? 'text-blue-500' : ''
                                }`}
                            onClick={() => handleItemClick('Tài khoản')}
                        >
                            <AiOutlineUser className="mr-2" />
                            Tài khoản
                        </li>
                        <li
                            className={`flex items-center cursor-pointer ${selectedItem === 'Blog' ? 'text-blue-500' : ''
                                }`}
                            onClick={() => handleItemClick('Blog')}
                        >
                            <AiOutlineRead className="mr-2" />
                            Blog
                        </li>
                        <li
                            className={`relative flex items-center cursor-pointer ${selectedItem === 'Nơi đến' ? 'text-blue-500' : ''
                                }`}
                            onClick={() => {
                                toggleSubMenu1();
                                handleItemClick('Nơi đến');
                            }}
                        >
                            <AiOutlineHome className="mr-2" />
                            Nơi đến
                            {showSubMenu1 ? (
                                <FontAwesomeIcon icon={faChevronUp} className="ml-auto" />
                            ) : (
                                <FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
                            )}
                        </li>
                        {showSubMenu1 && (
                            <ul className="ml-4 space-y-2 text-black">
                                <li
                                    className={`flex items-center cursor-pointer ${selectedItem === 'Nhà hàng' ? 'text-blue-500' : ''
                                        }`}
                                    onClick={() => handleItemClick('Nhà hàng')}
                                >
                                    <AiOutlineShop className="mr-2" />
                                    Nhà hàng
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer ${selectedItem === 'Nơi ở' ? 'text-blue-500' : ''
                                        }`}
                                    onClick={() => handleItemClick('Nơi ở')}
                                >
                                    <AiOutlineApartment className="mr-2" />
                                    Nơi ở
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer ${selectedItem === 'Địa điểm giải trí' ? 'text-blue-500' : ''
                                        }`}
                                    onClick={() => handleItemClick('Địa điểm giải trí')}
                                >
                                    <AiOutlineApartment className="mr-2" />
                                    Địa điểm giải trí
                                </li>
                            </ul>
                        )}
                        <li
                            className={`relative flex items-center cursor-pointer ${selectedItem === 'Địa điểm' ? 'text-blue-500' : ''
                                }`}
                            onClick={() => {
                                toggleSubMenu2();
                                handleItemClick('Địa điểm');
                            }}
                        >
                            <AiOutlineHome className="mr-2" />
                            Địa điểm
                            {showSubMenu2 ? (
                                <FontAwesomeIcon icon={faChevronUp} className="ml-auto" />
                            ) : (
                                <FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
                            )}
                        </li>
                        {showSubMenu2 && (
                            <ul className="ml-4 space-y-2 text-black">
                                <li
                                    className={`flex items-center cursor-pointer ${selectedItem === 'Nhà hàng' ? 'text-blue-500' : ''
                                        }`}
                                    onClick={() => handleItemClick('Nhà hàng')}
                                >
                                    <AiOutlineShop className="mr-2" />
                                    Nhà hàng
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer ${selectedItem === 'Nơi ở' ? 'text-blue-500' : ''
                                        }`}
                                    onClick={() => handleItemClick('Nơi ở')}
                                >
                                    <AiOutlineApartment className="mr-2" />
                                    Nơi ở
                                </li>
                                <li
                                    className={`flex items-center cursor-pointer ${selectedItem === 'Địa điểm giải trí' ? 'text-blue-500' : ''
                                        }`}
                                    onClick={() => handleItemClick('Địa điểm giải trí')}
                                >
                                    <AiOutlineApartment className="mr-2" />
                                    Địa điểm giải trí
                                </li>
                            </ul>
                        )}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold ">Help</h2>
                    <ul className="mt-4 space-y-5">
                        <li className="flex items-center ">
                            <AiOutlineApartment className="mr-2" />
                            Thiết lập
                        </li>
                        <li className="flex items-center ">
                            <AiOutlineApartment className="mr-2" />
                            Hỗ trợ
                        </li>
                    </ul>
                </div>
            </div>


            {/* Right Content */}
            <div className="w-4/5 p-8 ">
                {/* Top Right Section */}
                <div className="flex mb-8">
                    <div className="w-1/4 p-4 bg-[#bee2e7] mr-4 text-center rounded-3xl">
                        <p className=''>Tổng số </p>
                        <p className='font-bold text-3xl'>Nhà hàng</p>
                        <p className='font-bold text-3xl'>100</p>
                    </div>
                    <div className="w-1/4 p-4 bg-[#bee2e7] text-center mr-4 rounded-3xl">
                        <p>Tổng số </p>
                        <p className='font-bold text-3xl'>Chỗ ở</p>
                        <p className='font-bold text-3xl'>100</p>
                    </div>
                    <div className="w-1/4 p-4 bg-[#bee2e7] text-center mr-4 rounded-3xl">
                        <p>Tổng số </p>
                        <p className='font-bold text-3xl'>Địa điểm giải trí</p>
                        <p className='font-bold text-3xl'>100</p>
                    </div>
                    <div className="w-1/4 p-4 bg-[#bee2e7] text-center rounded-3xl">
                        <p>Tổng số </p>
                        <p className='font-bold text-3xl'>Đối tác</p>
                        <p className='font-bold text-3xl'>100</p>
                    </div>
                </div>

                {/* Bottom Right Section */}
                <div className="mb-8 ">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Địa điểm cần phê duyệt</h2>
                        <p className="text-blue-500 cursor-pointer hover:text-[#8DCADC] focus:outline-none">Xem tất cả</p>
                    </div>
                    <table className="w-full mt-4 bg-[#e8f3ea] rounded-3xl overflow-hidden">
                        <thead className=''>
                            <tr className="bg-gray-200 ">
                                <th className="p-2 ">Người đăng</th>
                                <th className="p-2 ">Tên địa điểm</th>
                                <th className="p-2 ">Thành phố</th>
                                <th className="p-2 ">Danh mục</th>
                                <th className="p-2 ">Ngày gửi</th>
                                <th className="p-2 ">Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {/* Sample Data */}
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">John</td>
                                <td className="p-2 border-t-1 border-gray-400">Restaurant A</td>
                                <td className="p-2 border-t-1 border-gray-400">Hokkaido</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">Doe</td>
                                <td className="p-2 border-t-1 border-gray-400">APA Hotel A</td>
                                <td className="p-2 border-t-1 border-gray-400">Tokyo</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">Jack</td>
                                <td className="p-2 border-t-1 border-gray-400">Katsushika Museum</td>
                                <td className="p-2 border-t-1 border-gray-400">Area</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">Mck</td>
                                <td className="p-2 border-t-1 border-gray-400">Restaurant A</td>
                                <td className="p-2 border-t-1 border-gray-400">Area</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">Baus</td>
                                <td className="p-2 border-t-1 border-gray-400">Restaurant A</td>
                                <td className="p-2 border-t-1 border-gray-400">Area</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">Co ca</td>
                                <td className="p-2 border-t-1 border-gray-400">Restaurant A</td>
                                <td className="p-2 border-t-1 border-gray-400">Area</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">Fanta</td>
                                <td className="p-2 border-t-1 border-gray-400">Restaurant A</td>
                                <td className="p-2 border-t-1 border-gray-400">Area</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">Kang</td>
                                <td className="p-2 border-t-1 border-gray-400">Restaurant A</td>
                                <td className="p-2 border-t-1 border-gray-400">Area</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">Jang</td>
                                <td className="p-2 border-t-1 border-gray-400">Restaurant A</td>
                                <td className="p-2 border-t-1 border-gray-400">Area</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 border-t-1 border-gray-400">Su su</td>
                                <td className="p-2 border-t-1 border-gray-400">Restaurant A</td>
                                <td className="p-2 border-t-1 border-gray-400">Area</td>
                                <td className="p-2 border-t-1 border-gray-400">User</td>
                                <td className="p-2 border-t-1 border-gray-400">2024-02-17</td>
                                <td className="p-2 border-t-1 border-gray-400 flex space-x-3 ml-20">
                                    <AiOutlineApartment className="" title="Xem" />
                                    <AiOutlineApartment className="" title="Xóa" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataManagement;
