// NOTIFICATIONS
export const openNotificationSuccess = (api, placement, message, description) => {
    api.success({
        message,
        description,
        placement,
    });
};

export const openNotificationError = (api, placement, message, status) => {
    api.error({
        message: `${status}`,
        description: message,
        placement,
    });
};


