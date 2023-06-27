import React from 'react';
import { screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from
    '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
