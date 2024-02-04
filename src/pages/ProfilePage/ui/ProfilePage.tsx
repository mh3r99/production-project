import React from 'react';
import { useParams } from 'react-router-dom';
import { VStack } from 'src/shared/ui/deprecated/Stack';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/editableProfileCard';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page data-testid="ProfilePage">
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
