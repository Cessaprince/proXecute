//Mock project data


const projects = [
    {
        id: '1',
        name: 'Create content for the brand',
        timeCreated: '01:23',
        tasks: [
            { id: 't1', title: 'Arrange the camera gotten from the store', isStarted:false, isCompleted: false },
            { id: 't2', title: 'Take pictures and videos indoors', isCompleted: false },
            { id: 't3', title: 'Take pictures and videos outdoors', isCompleted: false },
            { id: 't4', title: 'Edit them using capcut', isCompleted: false },
            { id: 't5', title: 'Send the edit to the marketing team to post', isCompleted: false },
        ],
        startDate: '2026-09-10',
        endDate: '2026-09-11',
        isCompleted: false,
        isStarted: true
    },
];

export default projects;