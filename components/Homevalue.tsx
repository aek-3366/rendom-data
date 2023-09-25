import React from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Select } from 'antd';
import { useRouter } from 'next/router'
import { useTranslation } from "react-i18next";
import NoSSR from 'react-no-ssr';

type Props = {}

export default function Homevalue({ }: Props) {
    const { t, i18n } = useTranslation();
    const router = useRouter()


    const handlelanguage = (value: string) => {
        i18n.changeLanguage(value);
    };

    return (
        <div>
            <Select
                className='flex flex-row-reverse'
                defaultValue="language"
                style={{
                    width: 120,
                    display: "flex",
                    marginLeft: "90%"
                }}
                onChange={handlelanguage}
                options={[
                    { value: 'th', label: 'th' },
                    { value: 'en', label: 'en' },
                ]}
            />
            <div>

            </div>
            <div style={{
                gap: "10px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "20%"
            }}>
                <Button type="primary"
                    style={{
                        width: "7rem",
                        backgroundColor: "white",
                        color: "black"
                    }}
                    onClick={() => router.push("/random")}
                >
                    {t("test1")}
                </Button>
                <Button type="primary"
                    style={{
                        width: "7rem",
                        backgroundColor: "white",
                        color: "black"
                    }}
                    onClick={() => router.push("/form")}


                >
                    {t("test2")}
                </Button>
            </div>
        </div >
    )
}