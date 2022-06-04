import React from 'react'
import { NextPage } from 'next';
import { PageLayout } from '../../../components/layouts';
import { useRouter } from 'next/router';
import { Link } from "@nextui-org/react";

const GithubUserSearchPage: NextPage = () => {
    const router = useRouter();
    return (
        <PageLayout title={'Portfolio'} pageDescription={'Portfolio'}>

            <Link block color="secondary" onClick={() => router.back()} >
                [ &lt;-- Go back ]
            </Link>

            <div>index</div>
        </PageLayout>
    )
}

export default GithubUserSearchPage;
