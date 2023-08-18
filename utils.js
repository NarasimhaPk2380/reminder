module.exports = {
    categoryList : ['School', 'Inter', 'Btech', 'Cheddy dosth', 'Cakewala', 'Relative', 'Friend', 'Other'],
    message: (userData) => {
        const msgs = {
            1: `Hey ${userData?.userName}${userData?.alias ? ` ${userData?.alias}` : ''} 1`,
            2: `Hey ${userData?.userName}${userData?.alias ? ` ${userData?.alias}` : ''} 2`,
            3: `Hey ${userData?.userName}${userData?.alias ? ` ${userData?.alias}` : ''} 3`,
        }
        return msgs[userData?.daysLeft]
    }
}