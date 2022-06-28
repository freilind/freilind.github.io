import { FC, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../../pages/index';
import { IntlProvider } from 'react-intl';
import es from "../../lang/es.json";
import en from "../../lang/en.json";
import { IMessage } from '../../interfaces';


interface IProps {
}

const messages: IMessage = {
    es,
    en,
};
const lang = 'es'

const IntlWrapper: FC<PropsWithChildren<IProps>> = ({ children }) => (
    <IntlProvider locale={lang} messages={messages[lang]}>{children}</IntlProvider>
);

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "es",
            pathname: "",
            query: "",
            asPath: "",
        };
    },
}));

describe('HomePage test', () => {
    beforeEach(() => {
        render(<HomePage />, { wrapper: IntlWrapper });
    })

    it('exist role home', () => {
        const home = screen.getByRole('home');
        expect(home).toBeInTheDocument();
    })
});

