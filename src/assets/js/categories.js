const categories = [
    {
        id: 1,
        title: 'Coding',
        courses: '39 corsi',
        iconId: 'pencil-box',
        iconColor: '#4CC083',
        bgColor: '#E2F3F0',
        d: 'M19 19V5H5v14zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2.3 6.35l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M7 14.94l6.06-6.06l2.06 2.06L9.06 17H7z'
    },
    {
        id: 2,
        title: 'Speaking',
        courses: '24 corsi',
        iconId: 'speakerphone',
        iconColor: '#f8bf61',
        bgColor: '#ffeed3',
        d: 'M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77c0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9z'
    },
    {
        id: 3,
        title: 'Conflitti',
        courses: '16 corsi',
        iconId: 'handshake',
        iconColor: '#EC6C5B',
        bgColor: '#ffe9e5',
        d: 'M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6'
    },
    {
        id: 4,
        title: 'Realtà',
        courses: '39 corsi',
        iconId: 'camera',
        iconColor: '#6d757e',
        bgColor: '#e0e5eb',
        d: 'M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3'
    },
    {
        id: 5,
        title: 'Mela',
        courses: '16 corsi',
        iconId: 'laptop',
        iconColor: '#EC6C5B',
        bgColor: '#ffe9e5',
        d: 'M4 6h16v10H4m16 2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2z'
    },
    {
        id: 6,
        title: 'Sconosciuto',
        courses: '24 corsi',
        iconId: 'fitness',
        iconColor: '#f8bf61',
        bgColor: '#ffeed3',
        d: 'M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22l1.43-1.43L16.29 22l2.14-2.14l1.43 1.43l1.43-1.43l-1.43-1.43L22 16.29z'
    },
    {
        id: 7,
        title: 'Gioia',
        courses: '24 corsi',
        iconId: 'speakerphone',
        iconColor: '#f8bf61',
        bgColor: '#ffeed3',
        d: 'M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77c0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9z'
    },
    {
        id: 8,
        title: 'Disegno',
        courses: '39 corsi',
        iconId: 'pencil-box',
        iconColor: '#4CC083',
        bgColor: '#E2F3F0',
        d: 'M19 19V5H5v14zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2.3 6.35l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M7 14.94l6.06-6.06l2.06 2.06L9.06 17H7z'
    },
    {
        id: 9,
        title: 'Farfalle',
        courses: '39 corsi',
        iconId: 'pencil-box',
        iconColor: '#6d757e',
        bgColor: '#e0e5eb',
        d: 'M19 19V5H5v14zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2.3 6.35l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M7 14.94l6.06-6.06l2.06 2.06L9.06 17H7z'
    },
];

export default categories;