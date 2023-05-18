// Properties
interface Model<TData, TMethods>{
    data: TData,
    methods: TMethods
}

interface IUserInfo {
    firstName: string,
    lastName: string
}

// Methods
interface IMethods {
    fullName(): string,
}

type model = Model<IUserInfo,IMethods>

class UserModel implements model{
    data: IUserInfo;
    methods: IMethods

    constructor (firstName: string, lastName: string){
        this.data = { firstName, lastName},
        this.methods = {
            fullName: () => `${firstName} ${lastName}`
        }
    }
}

const userInfo = new UserModel('Resma Islam', 'Upoma')
console.log(userInfo.methods.fullName())