import { FC, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IntlProvider } from 'react-intl';
import es from "../../lang/es.json";
import en from "../../lang/en.json";
import { IMessage } from '../../interfaces';
import Description from '../../components/perfil/Description';


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
            route: lang,
            pathname: "",
            query: "",
            asPath: "",
        };
    },
}));

describe('Description component test', () => {
    beforeEach(() => {
        render(<Description />, { wrapper: IntlWrapper });
    })

    it('exist name', () => {
        const name = screen.getByText('Freilin Manzano');
        expect(name).toBeInTheDocument();
    })

    it('exist role rrss', () => {
        const rrss = screen.getByRole('rrss');
        expect(rrss).toBeInTheDocument();
    })

    it('exist link linkedin', () => {
        const link = screen.getByRole('linkedin');
        expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/freilind/');
    })

    it('exist link instagram', () => {
        const link = screen.getByRole('instagram');
        expect(link).toHaveAttribute('href', 'https://www.instagram.com/ftojoh/');
    })

    it('exist link gmail', () => {
        const link = screen.getByRole('gmail');
        expect(link).toHaveAttribute('href', '#');
    })
});

