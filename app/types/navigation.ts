export type RootStackParamList ={
    Login: undefined;
    Dashboard: {userId: string; userName: string};
    Perfil: {userId: string; userName: string};
    Explorar: {userId: string; userName: string};
    Tabs: {userId: string; userName: string};
};

// define os parâmetros que cada tela vai receber