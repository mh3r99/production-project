import React from 'react';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
