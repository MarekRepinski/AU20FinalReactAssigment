export type StackedScreens = {
    LoginScreen: undefined;
    ItemScreen: undefined;
    EditItemScreen: {
        id: string,
        name: string, 
        productType: string, 
        price: string, 
        onSend: (arg: string, arg2: string, arg3: string, arg4: string,) => void,
    };
}