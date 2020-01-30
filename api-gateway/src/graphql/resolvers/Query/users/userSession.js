const userSessionResolver = async (obj, { me }, { res }) => {
    if (!me) {
        throw new Error('Unsupported argument value');
    }

    return res.locals.userSession;
};

export default userSessionResolver;
