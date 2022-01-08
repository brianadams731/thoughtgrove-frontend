import create from 'zustand';

interface IToast{
    subject: string;
    description: string;
}

interface IState{
    toasts: IToast[];
    addToasts: (toast:IToast) => void;
    removeTopToast: ()=> void;
}

const useToastStore = create<IState>((set)=>({
    toasts: [],
    addToasts: (toast:IToast) => {
        set((state) =>({
            toasts: [...state.toasts, toast]
        }))
    },
    removeTopToast: ()=> {
        set((state)=>({
            toasts: [...state.toasts.slice(1)]
        }))
    }
}))

export { useToastStore }