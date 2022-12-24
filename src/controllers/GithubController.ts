import { Request, Response } from 'express';
import https from 'https';

class GithubController {
  public getAllUsers = async (request: Request, response: Response) => {
    const { since } = request.query;

    const options = {
      hostname: 'api.github.com',
      path: `/users?since=${since}`,
      headers: {
        'User-Agent': 'luizcalaca',
        Accept: 'application/vnd.github+json',
        Authorization: `Authorization: Bearer ${process.env.TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'Access-Control-Expose-Headers': 'Link',
      },
    };

    https.get(options, (apiResponse) => {
      apiResponse.pipe(response);
    }).on('error', (error) => {
      response.status(500).send(error);
    });
  };

  public getByUser = async (request: Request, response: Response) => {
    const { username } = request.params;

    const options = {
      hostname: 'api.github.com',
      path: `/users/${username}/hovercard`,
      headers: {
        'User-Agent': 'luizcalaca',
        Accept: 'application/vnd.github+json',
        Authorization: `Authorization: Bearer ${process.env.TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    };

    https.get(options, (apiResponse) => {
      apiResponse.pipe(response);
    }).on('error', (error) => {
      response.status(500).send(error);
    });
  };

  public getAllUserRepositories = async (request: Request, response: Response) => {
    const { username } = request.params;

    const options = {
      hostname: 'api.github.com',
      path: `/users/${username}/repos`,
      headers: {
        'User-Agent': 'luizcalaca',
        Accept: 'application/vnd.github+json',
        Authorization: `Authorization: Bearer ${process.env.TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    };

    https.get(options, (apiResponse) => {
      apiResponse.pipe(response);
    }).on('error', (error) => {
      response.status(500).send(error);
    });
  };
}

export default GithubController;
