<script setup>
import { ref } from 'vue';
const open = ref(false);
const rows = ref([
    {
        id: "1",
        admin: "Raouf Boukhoucha",
        date: "DD/MM/YYYY",
        time: "00:00",
        reason: "New group",
        comment: "10",
        status: "OnGoing",
        links: "https://www.google.com",
    },
    {
        id: "1",
        admin: "Raouf Boukhoucha",
        date: "DD/MM/YYYY",
        time: "00:00",
        reason: "New group",
        comment: "10",
        status: "OnGoing",
        links: "https://www.google.com",
    },
    {
        id: "1",
        admin: "Raouf Boukhoucha",
        date: "DD/MM/YYYY",
        time: "00:00",
        reason: "New group",
        comment: "10",
        status: "OnGoing",
        links: "https://www.google.com",
    },


]);
const priority = ref('Emergency')

</script>

<template>

    <!-- Modal Content -->
    <div
        class="relative w-full h-content max-w-6xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
            <h2 id="modal-title" class="text-xl font-bold text-black">
                Requested Printing
            </h2>


            <!-- Close Button -->
            <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="open = false">
                <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.7171 14.9494C16.229 14.4612 15.4375 14.4612 14.9494 14.9494C14.4612 15.4375 14.4612 16.229 14.9494 16.7171L18.2321 19.9999L14.9494 23.2828C14.4612 23.7708 14.4612 24.5623 14.9494 25.0504C15.4375 25.5386 16.229 25.5386 16.7171 25.0504L20 21.7678L23.2826 25.0504C23.7708 25.5386 24.5623 25.5386 25.0505 25.0504C25.5386 24.5623 25.5386 23.7708 25.0505 23.2826L21.7676 19.9999L25.0505 16.7171C25.5386 16.229 25.5386 15.4376 25.0505 14.9494C24.5623 14.4612 23.7708 14.4612 23.2826 14.9494L20 18.2321L16.7171 14.9494Z"
                        fill="#22305C" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20 2.08337C10.1049 2.08337 2.08337 10.1049 2.08337 20C2.08337 29.8952 10.1049 37.9167 20 37.9167C29.8952 37.9167 37.9167 29.8952 37.9167 20C37.9167 10.1049 29.8952 2.08337 20 2.08337ZM4.58337 20C4.58337 11.4857 11.4857 4.58337 20 4.58337C28.5144 4.58337 35.4167 11.4857 35.4167 20C35.4167 28.5144 28.5144 35.4167 20 35.4167C11.4857 35.4167 4.58337 28.5144 4.58337 20Z"
                        fill="#22305C" />
                </svg>
            </button>
        </div>

        <div class="max-w-6xl mx-auto bg-[#E8EBF2] border rounded-lg">
            <!-- Form -->
            <form class="space-y-4">
                <div
                    class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg overflow-x-auto">
                    <div class="max-w-6xl p-2 bg-[#D1D8E7] rounded-t-lg">
                        <h2 class="text-lg font-semibold text-gray-800 mb-1">Request Info</h2>
                    </div>

                    <div class="pr-3 pl-3 pb-3 bg-[#E8EBF2] rounded-md">
                        <div class="flex flex-wrap items-center gap-4">
                            <!-- Teacher Name -->
                            <label class="text-md font-bold" for="amount">Teacher Name</label>
                            <input id="amount" type="text"
                                class="w-60 py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                                placeholder="مسعي أحمد محمد العروسي" disabled required />

                            <!-- Phone number -->
                            <label class="text-md font-bold" for="average">Phone number</label>
                            <div class="flex">
                                <input type="text"
                                    class="w-28 py-1.5 px-3 border text-center rounded-l-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                                    placeholder="06 66 66 66" disabled required />
                                <input type="text"
                                    class="w-28 py-1.5 px-3 border text-center rounded-r-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                                    placeholder="66 66 66666" disabled required />
                            </div>
                            <!-- Priority -->
                            <label class="text-md font-bold" for="priority">Priority</label>
                            <input id="priority" type="text"
                                class="py-1.5 px-3 w-32 text-center rounded-lg border focus:ring-[#3D548D]"
                                :value="priority" :class="{
                                    'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]': priority === 'Emergency',
                                    'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]': priority === 'High',
                                    'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]': priority === 'Normal',
                                    'bg-[#E4FCFF] text-[#3279B2] border-[#E4FCFF]': priority === 'Low',
                                }" disabled />
                        </div>
                    </div>
                </div>

                <div class="pb-2 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
                    <div class="w-full rounded-lg ">
                        <!-- Scrollable Container -->
                        <div class="overflow-y-auto h-36 rounded-lg">
                            <!-- Table body for scrolling -->
                            <table class="w-full border-separate" style="border-spacing: 0 10px;">
                                <thead class="bg-[#D1D8E7] rounded-lg">
                                    <tr class="text-left text-[#22305C] rounded-l-lg">
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            GID
                                        </th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Class</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Timing</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            LA</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Category</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Book</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Unit</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Quantity</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Due Date</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Status</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Links</th>
                                        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">
                                            Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in rows" :key="index" @click="selectRow(index)" :class="[
                                        'cursor-pointer',
                                        selectedRow === index ? 'bg-[#939BAD] text-white' : '',
                                        'hover:bg-gray-300'
                                    ]"
                                        class="even:bg-[#D1D8E7] odd:bg-[#FFFFFF] hover:bg-[#939BAD] text-center text-[#22305C]">
                                        <td class="py-1 px-2 rounded-l-lg border-l border-t border-b border-[#939BAD]">
                                            {{ item.id }}</td>
                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">{{ item.admin }}</td>
                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">{{ item.date }}</td>
                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">{{ item.time }}</td>
                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">{{ item.time }}</td>
                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">{{ item.time }}</td>
                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">{{ item.time }}</td>
                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">
                                            <input id="reason" type="text"
                                                class="py-1 px-1 w-12 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                                                :value=item.comment disabled />
                                        </td>
                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">{{ item.date }}</td>
                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">
                                            <select id="status"
                                                class="py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D] border"
                                                v-model="item.status" :class="{
                                                    'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]': item.status === 'Canceled',
                                                    'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]': item.status === 'OnGoing',
                                                    'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]': item.status === 'Done',
                                                    'bg-[#E4FCFF] text-[#3279B2] border-[#E4FCFF]': item.status === 'NotYet',
                                                }">
                                                <option value="Canceled">Canceled</option>
                                                <option value="OnGoing">On Going</option>
                                                <option value="Done">Done</option>
                                                <option value="NotYet">Not Yet</option>
                                            </select>
                                        </td>

                                        <td class="py-1 px-2 border-t border-b border-[#939BAD]">
                                            <button class="p-1">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M19.7388 4.26118C17.0572 1.57961 12.7095 1.57961 10.0279 4.26118L9.30707 4.98203C9.01418 5.27492 9.01418 5.7498 9.30707 6.04269C9.59997 6.33558 10.0748 6.33558 10.3677 6.04269L11.0886 5.32184C13.1844 3.22605 16.5823 3.22605 18.6781 5.32184C20.7739 7.41763 20.7739 10.8156 18.6781 12.9114L17.9573 13.6322C17.6644 13.9251 17.6644 14.4 17.9573 14.6929C18.2502 14.9858 18.725 14.9858 19.0179 14.6929L19.7388 13.972C22.4203 11.2905 22.4203 6.94276 19.7388 4.26118Z"
                                                        fill="#1C274C" />
                                                    <path
                                                        d="M6.04269 9.30707C6.33558 9.59997 6.33558 10.0748 6.04269 10.3677L5.32184 11.0886C3.22605 13.1844 3.22605 16.5823 5.32184 18.6781C7.41763 20.7739 10.8156 20.7739 12.9114 18.6781L13.6322 17.9573C13.9251 17.6644 14.4 17.6644 14.6929 17.9573C14.9858 18.2501 14.9858 18.725 14.6929 19.0179L13.972 19.7388C11.2905 22.4203 6.94276 22.4203 4.26118 19.7388C1.57961 17.0572 1.57961 12.7095 4.26118 10.0279L4.98203 9.30707C5.27492 9.01418 5.7498 9.01418 6.04269 9.30707Z"
                                                        fill="#1C274C" />
                                                    <path
                                                        d="M14.6928 9.30707C14.9857 9.59997 14.9857 10.0748 14.6928 10.3677L10.3677 14.6928C10.0748 14.9857 9.59997 14.9857 9.30707 14.6928C9.01418 14.3999 9.01418 13.9251 9.30707 13.6322L13.6322 9.30707C13.9251 9.01418 14.3999 9.01418 14.6928 9.30707Z"
                                                        fill="#1C274C" />
                                                </svg>

                                            </button>
                                        </td>
                                        <td class="py-1 px-2 rounded-r-lg border-r border-t border-b border-[#939BAD]">
                                            <button class="p-1">
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



                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>



                </div>






                <div class="flex px-4 py-4 space-x-4 overflow-x-auto bg-[#E8EBF2] rounded-md justify-center">
                    <select id="slecrelation"
                        class="w-40 py-1.5 px-2 text-[#22305C] text-left border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                        required>
                        <option value="" disabled selected>Printing</option>
                        <option class="text-left" value="reason1">Reason 1</option>
                        <option class="text-left" value="reason2">Reason 2</option>
                        <option class="text-left" value="reason3">Reason 3</option>
                        <option class="text-left" value="reason4">Reason 4</option>

                    </select>
                    <input id="reason" type="text"
                        class="w-40 y-1.5 px-2 text-left text-[#22305C] border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                        placeholder="Comment" />
                    <button
                        class="px-4 py-2 bg-[#3D548D] font-medium tracking-wide text-white transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                        Save
                    </button>

                </div>


            </form>

        </div>

    </div>
</template>