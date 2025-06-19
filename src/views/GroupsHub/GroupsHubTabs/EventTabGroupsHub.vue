<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToGroupDetails() {
    router.push('GroupeDetailsEvents')
}
</script>

<template>
    <div class="p-4 bg-gray-100 rounded-lg">

        <div class="relative flex justify-between py-2 overflow-x-auto rounded whitespace-nowrap">
            <div class="inline-flex max-w-md overflow-hidden rounded min-w-max">
                <input type="text" placeholder="Search"
                    class="border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"></input>
            </div>
        </div>
        <!-- Table -->
        <div class="pt-4 ">
            <div class="overflow-x-auto rounded-lg shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
                <table class="min-w-full table-auto">
                    <thead>
                        <tr class="bg-[#F0F2F7] text-center">
                            <th class="px-2 py-2"></th>
                            <th class="px-2 py-2"></th>
                            <th class="px-2 py-2 text-[#22305C] font-medium">Event</th>
                            <th class="px-2 py-2 text-[#22305C] font-medium">PN
                                <div class="inline-flex items-center justify-end">
                                    <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg>
                                    </a>
                                </div>
                            </th>
                            <th class="px-2 py-2 text-[#22305C] font-medium">Days</th>
                            <th class="px-2 py-2 text-[#22305C] font-medium">Time</th>
                            <th class="px-2 py-2 text-[#22305C] font-medium">Teacher</th>
                            <th class="px-2 py-2 text-[#22305C] font-medium">Start Day</th>
                            <th class="px-2 py-2 text-[#22305C] font-medium">Status</th>
                            <th class="px-2 py-2 text-[#22305C] font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody class="text-[#22305C]">
                        <tr v-for="(row, index) in paginatedData" :key="index" :class="getRowClass(row.students)"
                            class="relative">
                            <!-- Table Data -->
                            <td class="px-0 relative">
                                <div :class="`absolute left-0 top-0 bottom-0 w-2 rounded-r-lg ${row.color}`"></div>
                            </td>
                            <td class="px-4 py-2 text-center text-sm">
                                <button @click="goToGroupDetails()">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V7C11.25 6.58579 11.5858 6.25 12 6.25Z"
                                            fill="#1C274C" />
                                        <path
                                            d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                                            fill="#1C274C" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z"
                                            fill="#1C274C" />
                                    </svg>

                                </button>
                            </td>
                            <td class="px-4 py-2 text-center text-sm">{{ row.event }}</td>
                            <td class="px-4 py-2 text-center text-sm">{{ row.pn }}</td>
                            <td class="px-4 py-2 text-center text-sm">{{ row.days }}</td>
                            <td class="px-4 py-2 text-center text-sm">{{ row.time }}</td>
                            <td class="px-4 py-2 text-center text-sm">{{ row.teacher }}</td>
                            <td class="px-4 py-2 text-center text-sm">{{ row.startdate }}</td>
                            <td class="px-4 py-2 text-center text-sm">
                                <input id="status" type="text" :value="row.status" :class="[
                                    'py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D]',
                                    row.status === 'Stopped' ? 'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]' : '',
                                    row.status === 'Reactive' ? 'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]' : '',
                                    row.status === 'Active' ? 'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]' : '',
                                    row.status === 'Freeze' ? 'bg-[#E4FCFF] text-[#3279B2] border-[#E4FCFF]' : ''
                                ]" disabled />
                            </td>
                            <td class="px-4 py-2 text-center text-sm relative">
                                <button class="p-1"
                                    @click="dropdownVisibleIndex = dropdownVisibleIndex === index ? null : index">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"> -->
                                        <path
                                            d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
                                            fill="#1C274C" />
                                        <path
                                            d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                                            fill="#1C274C" />
                                        <path
                                            d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
                                            fill="#1C274C" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                                            fill="#1C274C" />
                                    </svg>
                                </button>
                                <div v-if="dropdownVisibleIndex === index"
                                    class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                                    <ul class="text-sm text-left">
                                        <li class="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M11.9426 1.25H13.5C13.9142 1.25 14.25 1.58579 14.25 2C14.25 2.41421 13.9142 2.75 13.5 2.75H12C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12V10.5C21.25 10.0858 21.5858 9.75 22 9.75C22.4142 9.75 22.75 10.0858 22.75 10.5V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM16.7705 2.27592C18.1384 0.908029 20.3562 0.908029 21.7241 2.27592C23.092 3.6438 23.092 5.86158 21.7241 7.22947L15.076 13.8776C14.7047 14.2489 14.4721 14.4815 14.2126 14.684C13.9069 14.9224 13.5761 15.1268 13.2261 15.2936C12.929 15.4352 12.6169 15.5392 12.1188 15.7052L9.21426 16.6734C8.67801 16.8521 8.0868 16.7126 7.68711 16.3129C7.28742 15.9132 7.14785 15.322 7.3266 14.7857L8.29477 11.8812C8.46079 11.3831 8.56479 11.071 8.7064 10.7739C8.87319 10.4239 9.07761 10.0931 9.31605 9.78742C9.51849 9.52787 9.7511 9.29529 10.1224 8.924L16.7705 2.27592ZM20.6634 3.33658C19.8813 2.55448 18.6133 2.55448 17.8312 3.33658L17.4546 3.7132C17.4773 3.80906 17.509 3.92327 17.5532 4.05066C17.6965 4.46372 17.9677 5.00771 18.48 5.51999C18.9923 6.03227 19.5363 6.30346 19.9493 6.44677C20.0767 6.49097 20.1909 6.52273 20.2868 6.54543L20.6634 6.16881C21.4455 5.38671 21.4455 4.11867 20.6634 3.33658ZM19.1051 7.72709C18.5892 7.50519 17.9882 7.14946 17.4193 6.58065C16.8505 6.01185 16.4948 5.41082 16.2729 4.89486L11.2175 9.95026C10.801 10.3668 10.6376 10.532 10.4988 10.7099C10.3274 10.9297 10.1804 11.1676 10.0605 11.4192C9.96337 11.623 9.88868 11.8429 9.7024 12.4017L9.27051 13.6974L10.3026 14.7295L11.5983 14.2976C12.1571 14.1113 12.377 14.0366 12.5808 13.9395C12.8324 13.8196 13.0703 13.6726 13.2901 13.5012C13.468 13.3624 13.6332 13.199 14.0497 12.7825L19.1051 7.72709Z"
                                                    fill="#1C274C" />
                                            </svg>
                                            Edit
                                        </li>
                                        <li class="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62177 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62177 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62177 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62177 2.75 7.91356 2.75159 6.61358 2.92637ZM10.5172 6.4569C10.8172 6.74256 10.8288 7.21729 10.5431 7.51724L7.68596 10.5172C7.5444 10.6659 7.34812 10.75 7.14286 10.75C6.9376 10.75 6.74131 10.6659 6.59975 10.5172L5.4569 9.31724C5.17123 9.01729 5.18281 8.54256 5.48276 8.2569C5.78271 7.97123 6.25744 7.98281 6.5431 8.28276L7.14286 8.9125L9.4569 6.48276C9.74256 6.18281 10.2173 6.17123 10.5172 6.4569ZM12.25 9C12.25 8.58579 12.5858 8.25 13 8.25H18C18.4142 8.25 18.75 8.58579 18.75 9C18.75 9.41421 18.4142 9.75 18 9.75H13C12.5858 9.75 12.25 9.41421 12.25 9ZM10.5172 13.4569C10.8172 13.7426 10.8288 14.2173 10.5431 14.5172L7.68596 17.5172C7.5444 17.6659 7.34812 17.75 7.14286 17.75C6.9376 17.75 6.74131 17.6659 6.59975 17.5172L5.4569 16.3172C5.17123 16.0173 5.18281 15.5426 5.48276 15.2569C5.78271 14.9712 6.25744 14.9828 6.5431 15.2828L7.14286 15.9125L9.4569 13.4828C9.74256 13.1828 10.2173 13.1712 10.5172 13.4569ZM12.25 16C12.25 15.5858 12.5858 15.25 13 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H13C12.5858 16.75 12.25 16.4142 12.25 16Z"
                                                    fill="#1C274C" />
                                            </svg>
                                            Attendance
                                        </li>
                                        <li class="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9V11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                                                    fill="#1C274C" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                                                    fill="#1C274C" />
                                            </svg> New Student
                                        </li>
                                    </ul>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination Component -->
            <div class="flex items-center justify-between mt-4 bg-[#F0F2F7] px-4 py-2 rounded-lg">
                <!-- Rows per page -->
                <div class="flex items-center gap-2">
                    <span class="text-[#22305C] text-sm">Rows per page</span>
                    <select v-model="rowsPerPage" @change="updatePagination()"
                        class="text-black text-sm text-left border rounded px-4 py-1">
                        <option v-for="option in [5, 10, 20]" :key="option" :value="option">{{ option }}</option>
                    </select>
                </div>

                <!-- Pagination navigation -->
                <div class="flex items-center gap-2">
                    <span class="text-[#22305C] text-sm">Go to:</span>
                    <input v-model="currentPage" @keyup.enter="goToPage()" type="number" min="1" max="totalPages"
                        class="w-12 text-center text-sm text-black border rounded px-1 py-1" />
                    <button @click="prevPage()" :disabled="currentPage === 1"
                        class="px-2 py-2 border-b bg-[#FFFFFF] rounded-lg text-[#22305C] text-sm">
                        <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.6667 14.6666L4 7.99998L10.6667 1.33331L11.85 2.51665L6.36667 7.99998L11.85 13.4833L10.6667 14.6666Z"
                                fill="#22305C" />
                        </svg>

                    </button>
                    <span class="text-[#22305C] text-sm">{{ currentPage }} of {{ totalPages }}</span>
                    <button @click="nextPage()" :disabled="currentPage === totalPages"
                        class="px-2 py-2 border-b bg-[#FFFFFF] rounded-lg text-[#22305C] text-sm">
                        <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.33333 1.33335L12 8.00002L5.33333 14.6667L4.15 13.4834L9.63333 8.00002L4.15 2.51669L5.33333 1.33335Z"
                                fill="#22305C" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>



</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            activeTab: "regular",
            tableData: [
                {
                    event: 'Spring Event',
                    pn: '12',
                    days: 'Mon | Tue | Wed',
                    time: '18:00',
                    teacher: 'Hannane Legmairi',
                    startdate: '26/12/2024',
                    status: 'Active',
                    color: 'bg-[#14B5C7]',
                },
                {
                    event: 'Spring Event',
                    pn: '12',
                    days: 'Mon | Tue | Wed',
                    time: '18:00',
                    teacher: 'Hannane Legmairi',
                    startdate: '26/12/2024',
                    status: 'Active',
                    color: 'bg-[#14B5C7]',
                },
                {
                    event: 'Spring Event',
                    pn: '12',
                    days: 'Mon | Tue | Wed',
                    time: '18:00',
                    teacher: 'Hannane Legmairi',
                    startdate: '26/12/2024',
                    status: 'Active',
                    color: 'bg-[#14B5C7]',
                },
            ],
            dropdownVisibleIndex: null,
            rowsPerPage: 10,
            currentPage: 1,
            paginatedData: [],

        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.tableData.length / this.rowsPerPage);
        },
    },
    methods: {
        getRowClass(students) {
            if (students > 10) return "bg-[#FCECEC]";
            if (students > 5) return "bg-[#E3F5EE]";
            if (students == 0) return "bg-[#D1D8E7]";
            return "bg-[#F0F2F7]";
        },
        getColor(row) {
            if (row.students > 10) return "bg-red-500";
            if (row.students > 5) return "bg-yellow-500";
            return "bg-green-500";
        },
        updatePagination() {
            this.currentPage = 1; // Reset to the first page
            this.paginateData();
        },
        paginateData() {
            const start = (this.currentPage - 1) * this.rowsPerPage;
            const end = start + this.rowsPerPage;
            this.paginatedData = this.tableData.slice(start, end);
        },
        goToPage() {
            if (this.currentPage < 1) this.currentPage = 1;
            if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
            this.paginateData();
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.paginateData();
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.paginateData();
            }
        },
    },
    watch: {
        tableData: {
            handler() {
                this.paginateData();
            },
            immediate: true,
        },
    },
    mounted() {
        this.paginateData();
    },
};
</script>


<style>
.text-blue-500 {
    color: #3b82f6;
}

.border-blue-500 {
    border-color: #3b82f6;
}

.modal {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal.opacity-0 {
    opacity: 0;
    pointer-events: none;
}

.table-container {
    max-height: 400px;
    /* Limit the vertical height */
    overflow-y: auto;
    /* Enable vertical scrolling */
    overflow-x: auto;
    /* Enable horizontal scrolling */
    width: 100%;
    /* Ensure the table stays within the container's width */
}

.waiting-list-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden
}

.waiting-list-table th,
.waiting-list-table td {
    padding: 15px 10px;
    text-align: center;
    font-size: 14px;
    border: none
}

.waiting-list-table th {
    background-color: #D1D8E7;
    color: #22305C;
    font-weight: 600
}

.waiting-list-table td {
    color: #22305C
}

.waiting-list-table tr:nth-child(even) {
    background-color: #F8FAFD
}

.waiting-list-table tr:nth-child(odd) {
    background-color: #E8EDF7
}

.waiting-list-table tr:hover {
    background-color: #D1D8E7
}

.waiting-list-table td.status.balanced {
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    display: inline-block;
    margin-top: 5.5px;
    position: relative;
    top: 0;
    left: 13px;
    width: 115px;
    height: 40px
}

table.waiting-list-table td.status.pending select {
    background-color: inherit;
    color: #22305C;
    border: 1px solid #D1D8E7;
    border-radius: 10px;
    padding: 9px 19px;
    font-size: 14px;
    width: auto;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease
}

table.waiting-list-table td.status.pending select:hover,
table.waiting-list-table td.status.pending select:focus {
    background-color: #E8EDF7;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)
}

.notcoming {
    background-color: #FFEDEC !important;
}

.coming {
    background-color: #E4FCFF !important;
}

input {
    color: #22305C;
}
</style>
