import '@testing-library/jest-dom';

// Mock react-router-dom globally
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => children,
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
  useParams: () => ({}),
}));