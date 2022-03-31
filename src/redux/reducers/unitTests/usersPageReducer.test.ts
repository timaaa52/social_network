import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setUsersAC,
    setUsersCountAC,
    usersPageReducer,
    usersStateType,
} from "../usersPageReducer";


test('user status should be correctly changed', () => {
    const startState: usersStateType = {
        users: [
            {id: 1, name: 'Andrey', followed: false, photos: {small: null, large: null}, status: 'i am ok'},
            {id: 2, name: 'Vitya', followed: false, photos: {small: null, large: null}, status: 'i am ok'},
            {id: 3, name: 'Tanya', followed: false, photos: {small: null, large: null}, status: 'i am ok'}
        ],
        pageSize: 10,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: true
    };

    const action = followAC(2);

    const endState = usersPageReducer(startState, action);

    expect(endState.users[1].followed).toBe(true);
    expect(endState.users[2].followed).toBe(false);

});

test('users can be should correctly added', () => {

    const startState: usersStateType = {
        users: [],
        pageSize: 10,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: true
    };

    const action = setUsersAC( [{id: 1, name: 'Andrey', followed: false, photos: {small: null, large: null}, status: 'i am ok'},
        {id: 2, name: 'Vitya', followed: false, photos: {small: null, large: null}, status: 'i am ok'},
        {id: 3, name: 'Tanya', followed: false, photos: {small: null, large: null}, status: 'i am beautiful'}] );

    const endState = usersPageReducer(startState, action);

    expect(endState.users[0].name).toBe('Andrey')
    expect(endState.users[2].name).toBe('Tanya')
    expect(endState.users[2].status).toBe('i am beautiful')
});

test('userCount should be correct changed', () => {
    const startState: usersStateType = {
        users: [],
        pageSize: 10,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: true
    };

    const action = setUsersCountAC(25);
    const endState = usersPageReducer(startState, action);

    expect(endState.totalUserCount).toBe(25);
    expect(endState.currentPage).toBe(1);

})

test('currentPage should be correct changed', () => {
    const startState: usersStateType = {
        users: [],
        pageSize: 10,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: true
    };

    const action = setCurrentPageAC(34);

    const endState = usersPageReducer(startState, action);

    expect(endState.currentPage).toBe(34);
    expect(endState.pageSize).toBe(10);
});

test('isFetching should be correct changed', () => {
    const startState: usersStateType = {
        users: [],
        pageSize: 10,
        totalUserCount: 0,
        currentPage: 1,
        isFetching: true
    };

    const action = setIsFetchingAC(false);

    const endState = usersPageReducer(startState, action);

    expect(endState.isFetching).toBe(false)
    expect(endState.pageSize).toBe(10)
})
