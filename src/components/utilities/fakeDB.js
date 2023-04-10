const addToDB = id => {
    let appliedJobs = getAppliedJobs();

    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    else {
        // const newQuantity = quantity + 1;
        // appliedJobs[id] = newQuantity;
        
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

const removeFromDb = id => {
    const appliedJobs = getAppliedJobs();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
    }
}

const getAppliedJobs = () => {
    let appliedJobs = {};

    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

const deleteAppliedJobs = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDB,
    removeFromDb,
    getAppliedJobs,
    deleteAppliedJobs
}