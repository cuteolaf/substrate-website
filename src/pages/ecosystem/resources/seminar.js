import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import faq from '../../../../data/faq.json';
import seminars from '../../../../data/seminars.json';
import Icon from '../../../components/default/Icon';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';
import PrimaryButton from '../../../components/ui/PrimaryButton';
import SecondaryButton from '../../../components/ui/SecondaryButton';

export default function Seminar() {
  return (
    <Layout layout="sidebar">
      <SEO title="Seminar" />
      <Section>
        <div>
          <h2 className="text-4xl font-bold mb-6">
            <Icon name="seminar" className="inline mr-4 mb-1"></Icon>
            Substrate Seminar
          </h2>
          <p className="font-medium capitalize">Substrate Seminar is an open collaborative learning call</p>
          <PrimaryButton link="https://web3.foundation/grants/">
            <p className="mb-0 inline font-medium">Live Call</p>
          </PrimaryButton>
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 gap-6 bg-substrateGray-light rounded-md overflow-hidden">
          <div className="p-8 self-center">
            <h5 className="text-xl font-bold mb-4">An Open Collaborative Learning Call</h5>
            <p className="max-w-sm">
              Substrate Seminar is an open Collaborative Learning call where we learn about Substrate together. Run by
              DevHub, we meet every other Tuesday at 14:00UTC. Learn, show off a Substrate project, and make friends!
            </p>
            <p className="mb-4 font-bold">Add next call to Google Calendar</p>
            <SecondaryButton>
              <p className="inline font-medium mr-3">Add Call</p>
              <span className="text-white fill-current">
                <Icon name="calendar" className="inline mb-1" />
              </span>
            </SecondaryButton>
          </div>
          <StaticImage
            src="../../../images/photos/ecosystem/seminar/seminar.jpg"
            alt="Two men talking"
            className="order-first md:order-last w-full h-full object-cover"
          />
        </div>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="mb-16 md:mb-8">
            <h5 className="mb-8 font-medium text-2xl">FAQ</h5>
            {faq.map(({ q, a }) => (
              <>
                <p className="font-bold">{q}</p>
                <p dangerouslySetInnerHTML={{ __html: a }}></p>
              </>
            ))}
          </div>
          <div className="order-first md:order-last">
            <h5 className="mb-8 font-medium text-2xl">Upcoming Seminars</h5>
            {seminars.map(({ date, description }) => (
              <>
                <p className="text-substrateGreen fill-current">
                  <Icon name="calendar" className="inline mb-1 mr-3" />
                  {date}
                </p>
                <p className="border-b border-substrateBlackish pb-8">{description}</p>
              </>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
