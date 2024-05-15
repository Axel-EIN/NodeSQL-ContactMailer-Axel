export default (connection, DataType) => {
    connection.define(
        'Contact',
        {
            prenom: {
                type: DataType.STRING,
                allowNull: false
            },
            nom: {
                type: DataType.STRING,
                allowNull: false
            },
            telephone: {
                type: DataType.STRING,
                allowNull: true
            },
            email: {
                type: DataType.STRING,
                allowNull: false
            },
            message: {
                type: DataType.TEXT,
                allowNull: false
            }
        },
        { timestamps: true }
    )
};